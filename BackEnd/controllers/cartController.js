'use strict'
const Cart = require('../models/Cart')

const createCart = async (req, res) => {
    const {accessToken, ...others} = req.body
    const newCart = new Cart(others)

    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart._doc)
    } catch (err) {
        res.status(500).json(err)
    }
}

const updateCart = async (req, res) => {
    const {userId, product} = req.body
    try {
        const cartToUpdate = await Cart.findOne({userId})
        cartToUpdate.products.push(product)
        const savedCart = await cartToUpdate.save()
        res.status(200).json(savedCart._doc)
    } catch(err) {
        res.status(500).json(err)
    }
}

const deleteCart = async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json('Cart has been deleted...')
    } catch(err) {
        res.status(500).json(err)
    }
}

const getCartByUserId = async (req, res) => {
    try {
        const cart = await Cart.findOne({userId: req.params.userId})
        if (!cart)
            return res.status(404).json('Cart not found')
        res.status(200).json(cart._doc)
    } catch(err) {
        res.status(500).json(err)
    }
}

const getAllCart = async (req, res) => {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch(err) {
        res.status(500).json(err)
    }
}

module.exports = {
    createCart, updateCart, deleteCart, 
    getCartByUserId, getAllCart
}