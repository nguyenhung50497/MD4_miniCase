import { Schema, model } from 'mongoose';
export interface ICart {
    category ?: string;
    product ?: string;
}

const CartSchema = new Schema<ICart> ({
    name: String,
    price: Number,
    image: String,
    category: {
        type: String,
        ref: 'Category'
    },
    product: {
        type: String,
        ref: 'Product'
    }
})

const Cart = model<ICart> ('Cart', CartSchema);
export {Cart};