import { Product } from "../model/product";
import { Category } from "../model/category";

class ProductService {
    constructor() {

    }

    getAll = async () => {
        let products = await Product.find().populate('category');
        return products;
    }

    save = async (product) => {
        return Product.create(product);
    }

    private update = async (id, newProduct) => {
        let product = await Product.findOne({_id: id});
        if (!product) {
            return null;
        }
        return Product.updateOne({_id: id}, newProduct);
    }

    findById = async (id) => {
        let product = await Product.findOne({_id: id}).populate('category');
        if (!product) {
            return null;
        }
        return product;
    }

    private remove = async (id) => {
        let product = await Product.findOne({_id: id});
        if (!product) {
            return null;
        }
        return Product.deleteOne({_id: id});
    }

    search = async (name) => {
        let products = await Product.find({ name: {$regex: name}}).populate('category');
        if (!products) {
            return null;
        }
        return products;
    }

    priceRange = async (start, end) => {
        let products = await Product.find({ $and: [{price: {$gte: start}}, {price: {$lte: end}}]}).populate('category');
        if (!products) {
            return null;
        }
        return products;
    }
    priceRange1 = async (value) => {
        if (value === 100) {
            let products = await Product.find({ $and: [{price: {$gte: 0}}, {price: {$lte: value}}]}).populate('category');
            if (!products) {
                return null;
            }
            return products;
        }
        else if (value === 200) {
            let products = await Product.find({ $and: [{price: {$gte: 100}}, {price: {$lte: value}}]}).populate('category');
            if (!products) {
                return null;
            }
            return products;
        }
        else if (value === 500) {
            let products = await Product.find({ $and: [{price: {$gte: 200}}, {price: {$lte: value}}]}).populate('category');
            if (!products) {
                return null;
            }
            return products;
        }
        else if (value === 200) {
            let products = await Product.find({ $and: [{price: {$gte: 100}}, {price: {$lte: value}}]}).populate('category');
            if (!products) {
                return null;
            }
            return products;
        }
    }
}

export default new ProductService();