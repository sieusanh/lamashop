'use strict'
const Product = require('../models/Product')

const createProduct = async (req, res) => {
    let {price, accessToken, ...others} = req.body
    price = parseFloat(price)
    const newProduct = new Product({price, ...others})

    try {
        const savedProduct = await newProduct.save()
        // res.status(200).json(savedProduct)
        res.status(200).json(savedProduct._doc)
    } catch (err) {
        res.status(500).json(err)
    }
}

const updateProduct = async (req, res) => {
    const {accessToken, ...others} = req.body
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id, 
            {$set: others}, 
            {new: true}
        )
        res.status(200).json(updatedProduct)
    } catch(err) {
        res.status(500).json(err)
    }
}

const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json('Product has been deleted.')
    } catch(err) {
        res.status(500).json(err)
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product)
            return res.status(404).json('Product not found')
        res.status(200).json(product._doc)
    } catch(err) {
        res.status(500).json(err)
    }
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

module.exports = {
    createProduct, updateProduct, deleteProduct, 
    getProductById, getAllProduct
}
