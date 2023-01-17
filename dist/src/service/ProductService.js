"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let products = await product_1.Product.find().populate('category');
            return products;
        };
        this.save = async (product) => {
            return product_1.Product.create(product);
        };
        this.update = async (id, newProduct) => {
            let product = await product_1.Product.findOne({ _id: id });
            if (!product) {
                return null;
            }
            return product_1.Product.updateOne({ _id: id }, newProduct);
        };
        this.findById = async (id) => {
            let product = await product_1.Product.findOne({ _id: id }).populate('category');
            if (!product) {
                return null;
            }
            return product;
        };
        this.remove = async (id) => {
            let product = await product_1.Product.findOne({ _id: id });
            if (!product) {
                return null;
            }
            return product_1.Product.deleteOne({ _id: id });
        };
        this.search = async (name) => {
            let products = await product_1.Product.find({ name: { $regex: name } }).populate('category');
            if (!products) {
                return null;
            }
            return products;
        };
        this.priceRange = async (start, end) => {
            let products = await product_1.Product.find({ $and: [{ price: { $gte: start } }, { price: { $lte: end } }] }).populate('category');
            if (!products) {
                return null;
            }
            return products;
        };
        this.priceRange1 = async (value) => {
            let products;
            switch (value) {
                case 99:
                    products = await product_1.Product.find({ $and: [{ price: { $gte: 0 } }, { price: { $lte: value } }] }).populate('category');
                    if (!products) {
                        return null;
                    }
                    return products;
                case 499:
                    products = await product_1.Product.find({ $and: [{ price: { $gte: 100 } }, { price: { $lte: value } }] }).populate('category');
                    if (!products) {
                        return null;
                    }
                    return products;
                case 999:
                    products = await product_1.Product.find({ $and: [{ price: { $gte: 500 } }, { price: { $lte: value } }] }).populate('category');
                    if (!products) {
                        return null;
                    }
                    return products;
                case 1999:
                    products = await product_1.Product.find({ $and: [{ price: { $gte: 1000 } }, { price: { $lte: value } }] }).populate('category');
                    if (!products) {
                        return null;
                    }
                    return products;
                default:
                    return products = await product_1.Product.find().populate('category');
            }
        };
    }
}
exports.default = new ProductService();
//# sourceMappingURL=ProductService.js.map