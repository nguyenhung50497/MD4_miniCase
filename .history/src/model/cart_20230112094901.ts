import { Schema, model } from 'mongoose';
export interface ICart {
    category ?: string;
    product ?: string;
    product ?: string;
}

const CartSchema = new Schema<ICart> ({
    category: {
        type: String,
        ref: 'Category'
    },
    product: {
        type: String,
        ref: 'Product'
    },
    user: {
        type: String,
        ref: 'User'
    }
})

const Cart = model<ICart> ('Cart', CartSchema);
export {Cart};