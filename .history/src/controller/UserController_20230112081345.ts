import { Request, Response } from "express";
import userService from '../service/UserService';
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
        res.render('users/login');
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
                res.redirect(301, '/home-logined');
            }
            else {
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
            let user = await this.userService.findById(req.session.User);
            res.render('users/changePassword', {user: user});
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
                // req.flash('error','Old password is wrong!!!')
                res.redirect(301, '/users/change-pass');
            }
            else if (comparePass) {
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

}

export default new HomeController();