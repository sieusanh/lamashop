'use strict'
const Product = require('../models/Product')

function getProductById(req, res) {
    Product.findById(req.params.id)
    .then(product => {
        if (!product)
            return res.status(404).json({message: 'Product not found'})
        res.status(200).json(product)
    })
    .catch(err => res.status(500).json(err))    
}

const getAllProduct = async (req, res) => {
    const qNew = req.query.new
    const qCategory = req.query.category

    try {
        let products

        if (qNew) {
            products = await Product.find().sort({ createdAt: -1}).limit(1)
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory]
                }
            })
        } else {
            products = await Product.find()
        }
        for (let index in products) 
            products[index] = products[index]._doc
            
        res.status(200).json(products)
    } catch(err) {
        res.status(500).json(err)
    }
}

const createProduct = async (req, res) => {
    let {price, accessToken, ...others} = req.body
    price = parseFloat(price)
    Product.create({price, ...others})
    .then(product => {
        if (!product) {
            throw Error('Error happen when create product.')
        }
        res.status(200).json(product)
    })
    .catch(err => res.status(500).json(err))
}

function updateProduct(req, res) {
    Product.findByIdAndUpdate(
        req.params.id, 
        {$set: req.body}, 
        {new: true}
    )
    .then(product => {
        if (!product) {
            throw Error('Error happen when update product')
        }
        res.status(200).json(product)
    })
    .catch(err => res.status(500).json(err))
}

function deleteProduct(req, res) {
    Product.findByIdAndDelete(req.params.id)
    .then(product => {
        if (!product) {
            throw Error('Error happen when delete product')
        }
        res.status(200).json({message: 'Product has been deleted.'})
    })
    .catch(err => res.status(500).json(err))
}

module.exports = { 
    getProductById, getAllProduct, createProduct, 
    updateProduct, deleteProduct 
}
