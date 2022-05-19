'use strict'
const Order = require('../models/Order')

const createOrder = async (req, res) => {
    const {accessToken, ...others} = req.body
    const newOrder = new Order(others)
    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder._doc);
    } catch (err) {
        res.status(500).json(err)
    }
}

const updateOrder = async (req, res) => {
    const {accessToken, ...others} = req.body
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id, 
            {$set: others}, 
            {new: true}
        )
        res.status(200).json(updatedOrder._doc)
    } catch(err) {
        res.status(500).json(err)
    }
}

const deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json('Order has been deleted...')
    } catch(err) {
        res.status(500).json(err)
    }
}

const getOrderByUserId = async (req, res) => {
    try {
        // User may have more than one order, so use find() instead of findOne()
        const orders = await Order.find({userId: req.params.userId})
        res.status(200).json(orders)
    } catch(err) {
        res.status(500).json(err)
    }
}

const getAllOrder = async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json(orders)
    } catch(err) {
        res.status(500).json(err)
    }
}

const getMonthlyIncome = async (req, res) => {
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

    try {
        const income = await Order.aggregate([
            {$match: {createdAt: {$gte: previousMonth}}},
            {$project: {
                month: {$month: "$createdAt"},
                sales: "$amount"
            }},
            {$group: {_id: "$month", total: {$sum: "$sales"}}}
        ])
        res.status(200).json(income)
    } catch(err) {
        res.status(500).json(err)
    }
}

module.exports = {
    createOrder, updateOrder, deleteOrder, 
    getOrderByUserId, getAllOrder, getMonthlyIncome
}