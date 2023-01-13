"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = require("../model/category");
class CategoryService {
    constructor() {
        this.getAll = async () => {
            let categories = await category_1.Category.find();
            return categories;
        };
    }
}
exports.default = new CategoryService();
//# sourceMappingURL=CategoryService.js.map