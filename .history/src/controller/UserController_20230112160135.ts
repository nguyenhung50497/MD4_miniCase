import { Request, Response } from "express";
import userService from '../service/UserService';
import productService from '../service/ProductService';

import bcrypt from 'bcrypt';

declare module "express-session" {
    interface SessionData {
        User: { [key: string]: any }
    }
}

class HomeController {
    private userService;
    constructor() {
        this.userService = userService;
    }

    showFormLogin = async (req: Request, res: Response) => {
        let error = req.flash().error || [];
        res.render('users/login', { error: error });
    }

    login = async (req: Request, res: Response) => {
        if (req.body.username === 'admin' && req.body.password === 'admin') {
            req.session.User = req.body;
            res.redirect(301, '/home-logined');
        }
        else {
            let user = await this.userService.checkUser(req.body);
            if (user) {
                req.session.User = user._id;
                res.redirect(301, '/home-customer');
            }
            else {
                req.flash('error', 'Wrong username or password');
                res.redirect(301, '/users/login');
            }
        }
    }

    showFormRegister = async (req: Request, res: Response) => {
        res.render('users/register');
    }

    register = async (req: Request, res: Response) => {
        let username = await this.userService.checkUsername(req.body);
        if (username) {
            res.redirect(301, '/users/register');
        }
        else {
            let passwordHash = await bcrypt.hash(req.body.password, 10);

            let newUser = {
                username: req.body.username,
                password: passwordHash
            }
            await this.userService.registerUser(newUser);
            res.redirect(301, '/users/login');
        }
    }

    logout = async (req: Request, res: Response) => {
        await req.session.destroy((err) => {
            console.log('Destroyed');
            res.redirect(301, '/home');
        });
    }

    showFormChangePassword = async (req: Request, res: Response) => {
        if (req.session.User) {
            let error = req.flash().error || [];
            let user = await this.userService.findById(req.session.User);
            res.render('users/changePassword', {user: user, error: error});
        }
        else {
            res.redirect(301, '/users/login');
        }
    }

    changePassword = async (req: Request, res: Response) => {
        if (req.session.User) {
            let user = await this.userService.checkUser(req.body);
            let comparePass = await bcrypt.compare(req.body.password, req.body.newPassword);
            if (!user) {
                req.flash('error','Old password is wrong!!!');
                res.redirect(301, '/users/change-pass');
            }
            else if (comparePass) {
                req.flash('error',"New password doesn't match!!!");
                res.redirect(301, '/users/change-pass');
            } 
            else {
                let newUser = await this.userService.changePassword(req.session.User, req.body.newPassword);
                await req.session.destroy((err) => {
                    res.redirect(301, '/users/login');
                });
            }
        }
    }

    orderProduct = async (req: Request, res: Response) => {
        if (req.session.User) {
            let user = await this.userService.findById(req.session.User);
            let product = await productService.findById(req.params.id);
            let cart = await this.userService.orderProduct(+req.body.quantity, req.params.id, req.session.User);
            res.redirect(301, '/home-customer');
        }
        else {
            res.redirect(301, '/users/login');
        }
    }

    showFormCart = async (req: Request, res: Response) => {
        let cart = await userService.findCartByUser(req.session.User);
        let sum = 0;
        // console.log(await userService.totalMoney(cart));
        cart.map(async (item, index) => {
            let product = await productService.findById(item.product);
            sum += item.quantity * product.price;
            if (index === (cart.length - 1)) {
                console.log(sum);
            }
        });
        
        res.render('users/cart', { cart: cart, sum: sum });
    }

    searchProduct = async (req: Request, res: Response) => {
        let products = await productService.search(req.query.keyword);
        res.status(200).json(products);
    }


}

export default new HomeController();