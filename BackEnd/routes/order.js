
const router = require('express').Router()
const {userAuthentication} = require('../middlewares/Authentication')
const {adminAuthorization} = require('../middlewares/Authorization')
const {createOrder, updateOrder, deleteOrder, 
    getOrderByUserId, getAllOrder, getMonthlyIncome} = require('../controllers/orderController')

// CREATE
router.post('/', userAuthentication, createOrder)

// UPDATE
router.put('/:id', userAuthentication, adminAuthorization, updateOrder)

// DELETE
router.delete('/:id', userAuthentication, adminAuthorization, deleteOrder)

// GET USER ORDERS
router.get('/find/:userId', userAuthentication, getOrderByUserId)

// GET ALL 
router.get('/', userAuthentication, adminAuthorization, getAllOrder)

// GET MONTHLY INCOME
router.get('/income', userAuthentication, adminAuthorization, getMonthlyIncome)

module.exports = router