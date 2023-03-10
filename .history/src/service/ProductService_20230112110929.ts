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
        let products = await Product.find( name: )
    }
}

export default new ProductService();