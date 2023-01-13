declare class CategoryService {
    constructor();
    getAll: () => Promise<(import("mongoose").Document<unknown, any, import("../model/category").ICategory> & import("../model/category").ICategory & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
declare const _default: CategoryService;
export default _default;
