import { Schema, model } from 'mongoose';
export interface ICart {
    // category ?: string;
    status?: string;
    
    product ?: string;
    user ?: string;
}

const CartSchema = new Schema<ICart> ({
    // category: {
    //     type: String,
    //     ref: 'Category'
    // },
    status: String,
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