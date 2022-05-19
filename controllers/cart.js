'use strict'
const Cart = require('../models/Cart')
const Product = require('../models/Product')

function getCartByUserId(req, res) {
    Cart.findOne({userId: req.params.userId})
    .then(cart => {
        if (!cart)
            return res.status(404).json('Cart not found')
        res.status(200).json(cart)
    })
    .catch(err => res.status(500).json(err))
}

function getAllCart(req, res) {
    Cart.find()
    .then(carts => {
        if (!carts) {
            throw Error('Error happen when get all carts.')
        }
        res.status(200).json(carts)
    })
    .catch(err => res.status(500).json(err))
}

const getUserCartByUserId = async (req, res) => {
    try {
        const cart = await Cart.findOne({userId: req.params.userId})
        if (!cart)
            return res.status(404).json('Cart not found')
        const productArr = cart.products
        const userCart = productArr.forEach(function(p) {
            Product.findById(p.productId)
            .then(function(product) {
                const {title, color, size, price} = product
                return {
                    productId: p.productId,
                    quantity: p.quantity,
                    title,
                    image,
                    color,
                    size,
                    price,
                }
            })
        })
        res.status(200).json(userCart)
    }
    catch(err) { 
        res.status(500).json(err)
    }
}

function createCart(req, res) {
    Cart.create({userId: req.body.userId, products: []})
    .then(cart => {
        if (!cart) {
            throw Error('Error happen when create a new cart.')
        }
        res.status(200).json({id: cart._id})
    })
    .catch(err => res.status(500).json(err))
}

const updateCart = async (req, res) => {
    const {userId, product} = req.body
    const {productId, quantity} = product
    try {
        const cartToUpdate = await Cart.findOne({userId})
        if (!cartToUpdate) {
            return res.status(404).json({message: 'Cart not found'})
        }
        await cartToUpdate.products.push({productId, quantity})
        const savedCart = await cartToUpdate.save()
        res.status(200).json(savedCart)
    } catch(err) {
        res.status(500).json(err)
    }
}

function deleteCart (req, res) {
    Cart.findByIdAndDelete(req.params.id)
    .then(cart => {
        if (!cart) {
            return res.status(404).json({message: 'Cart not found'})
        }
        res.status(200).json({id: cart._id})
    })
    .catch(err => res.status(500).json(err))
}

module.exports = {
    getCartByUserId, getAllCart, getUserCartByUserId, 
    createCart, updateCart, deleteCart
}