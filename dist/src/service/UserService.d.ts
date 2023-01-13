declare class UserService {
    constructor();
    getAll: () => Promise<(import("mongoose").Document<unknown, any, import("../model/user").IUser> & import("../model/user").IUser & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    checkUser: (username: any) => Promise<import("mongoose").Document<unknown, any, import("../model/user").IUser> & import("../model/user").IUser & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    checkUsername: (user: any) => Promise<import("mongoose").Document<unknown, any, import("../model/user").IUser> & import("../model/user").IUser & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    registerUser: (user: any) => Promise<import("mongoose").Document<unknown, any, import("../model/user").IUser> & import("../model/user").IUser & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findById: (id: any) => Promise<import("mongoose").Document<unknown, any, import("../model/user").IUser> & import("../model/user").IUser & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    private changePassword;
    private orderProduct;
    findCartByUser: (user: any) => Promise<Omit<Omit<import("mongoose").Document<unknown, any, import("../model/cart").ICart> & import("../model/cart").ICart & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>[]>;
    getAllCart: () => Promise<Omit<Omit<import("mongoose").Document<unknown, any, import("../model/cart").ICart> & import("../model/cart").ICart & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>[]>;
    changeStatusCart: (user: any) => Promise<string>;
}
declare const _default: UserService;
export default _default;
