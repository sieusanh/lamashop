
const router = require('express').Router()
const {userAuthentication} = require('../middlewares/Authentication')
const {adminAuthorization} = require('../middlewares/Authorization')
const {createCart, updateCart, deleteCart, 
    getCartByUserId, getAllCart} = require('../controllers/cartController')

router.get('/checkCart', (req, res) => res.render('./cart/cart'))    
router.post('/checkCart', userAuthentication, (req, res) => 
    res.status(200).json({message: 'You\'re now authenticated'})
)

// CREATE
router.post('/create', userAuthentication, createCart)

// UPDATE
router.put('/:id', userAuthentication, updateCart)

// DELETE
router.delete('/:id', userAuthentication, adminAuthorization, deleteCart)

// GET CART BY USER ID
router.post('/find/:userId', userAuthentication, getCartByUserId)
 
// GET ALL CART
router.post('/', userAuthentication, adminAuthorization, getAllCart)

module.exports = router