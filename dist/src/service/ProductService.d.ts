declare class ProductService {
    constructor();
    getAll: () => Promise<Omit<import("mongoose").Document<unknown, any, import("../model/product").IProduct> & import("../model/product").IProduct & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    save: (product: any) => Promise<import("mongoose").Document<unknown, any, import("../model/product").IProduct> & import("../model/product").IProduct & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    private update;
    findById: (id: any) => Promise<import("mongoose").Document<unknown, any, import("../model/product").IProduct> & import("../model/product").IProduct & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    private remove;
    search: (name: any) => Promise<Omit<import("mongoose").Document<unknown, any, import("../model/product").IProduct> & import("../model/product").IProduct & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    priceRange: (start: any, end: any) => Promise<Omit<import("mongoose").Document<unknown, any, import("../model/product").IProduct> & import("../model/product").IProduct & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    priceRange1: (value: any) => Promise<any>;
}
declare const _default: ProductService;
export default _default;
