import { User } from "../model/user";
import { Cart } from "../model/cart";
import { Product } from "../model/product";

class UserService {
    constructor() {
    }

    getAll = async () => {
        let users = await User.find();
        return users;
    }

    checkUser = async (user) => {
        let userCheck = await User.findOne({ username: user.username, password: user.password });
        if (!userCheck) {
            return null;
        }
        return userCheck;
    }

    checkUsername = async (user) => {
        let usernameCheck = await User.findOne({ username: user.username});
        if (!usernameCheck) {
            return null;
        }
        return usernameCheck;
    }

    registerUser = async (user) => {
        return await User.create(user);
    }

    findById = async (id) => {
        let user = await User.findOne({ _id: id });
        if (!user) {
            return null;
        }
        return user;
    }

    private changePassword = async (id, newPassword) => {
        let user = await User.findOne({ _id: id});
        if (!user) {
            return null;
        }
        return User.updateOne({_id: id}, {password: newPassword});
    }

    orderProduct = async (quantity, product, user) => {
        let cartCheck = await Cart.findOne({ user: user, product: product});
        if (!cartCheck) {
            let cart = {
                status: 'buying',
                quantity: quantity,
                product: product,
                user: user,
            }
            return await Cart.create(cart);
        }
        else {
            let 
        }
    }

    findCartByUser = async (user) => {
        let cart = await Cart.find({ user: user }).populate('product').populate('user');
        if (!cart) {
            return null;
        }
        return cart;
    }

    getAllCart = async () => {
        let cart = await Cart.find().populate('product').populate('user');
        return cart;
    }
}

export default new UserService();