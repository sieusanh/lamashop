const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema(
    {
        cartId: { type: String, required: true},
        amount: { type: Number, required: true},
        address: { type: Object, required: true},
        status: { type: String, default: "pending"},
    }, 
    {timestamps: true}
    )
    
    module.exports = mongoose.model("Order", OrderSchema)