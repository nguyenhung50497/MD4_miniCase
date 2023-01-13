"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = require("mongoose");
const CartSchema = new mongoose_1.Schema({
    status: String,
    quantity: Number,
    product: {
        type: String,
        ref: 'Product'
    },
    user: {
        type: String,
        ref: 'User'
    }
});
const Cart = (0, mongoose_1.model)('Cart', CartSchema);
exports.Cart = Cart;
//# sourceMappingURL=cart.js.map