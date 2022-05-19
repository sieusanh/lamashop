
const router = require('express').Router()
const {userAuthentication} = require('../middlewares/Authentication')
const {adminAuthorization} = require('../middlewares/Authorization')
const {getCartByUserId, getAllCart, getUserCartByUserId, 
    createCart, updateCart, deleteCart} = require('../controllers/cart')

// GET CART BY USER ID
router.get('/:userId', userAuthentication, getCartByUserId)
 
// GET ALL CART
router.get('/', userAuthentication, adminAuthorization, getAllCart)

// GET USER CART
router.get('/user-cart/:userId', userAuthentication, getUserCartByUserId)

// CREATE
router.post('/', userAuthentication, createCart)

// UPDATE
router.put('/:id', userAuthentication, updateCart)

// DELETE
router.delete('/:id', userAuthentication, adminAuthorization, deleteCart)

module.exports = router