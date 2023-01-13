import { Schema, model } from 'mongoose';
export interface ICart {
    name ?: string;
    price ?: number;
    image ?: string;
    category ?: string;
}

const ProductSchema = new Schema<ICart> ({
    name: String,
    price: Number,
    image: String,
    category: {
        type: String,
        ref: 'Category'
    }
})

const Cart = model<ICart> ('Cart', ProductSchema);
export {Product};