import { User } from "../model/user";
import { Cart } from "../model/cart";

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

    orderProduct = async (product) => {
        await Cart.create()
    }
}

export default new UserService();