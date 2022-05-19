
const router = require('express').Router()
const {userAuthentication} = require('../middlewares/Authentication')
const {adminAuthorization} = require('../middlewares/Authorization')
const {getUserById, getAllUser, getUserStats} = require('../controllers/admin')

// GET USER BY ID
router.get('/:id', userAuthentication, adminAuthorization, getUserById)

// // GET ALL USER
router.get('/', userAuthentication, adminAuthorization, getAllUser)

// // GET USER STATS
router.get('/stats', userAuthentication, adminAuthorization, getUserStats)

module.exports = router