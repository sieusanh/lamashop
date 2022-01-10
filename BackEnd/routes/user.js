
const router = require('express').Router()
const {userAuthentication} = require('../middlewares/Authentication')
const {adminAuthorization} = require('../middlewares/Authorization')
const {updateUserById, deleteUserById, getUserById, 
    getAllUser, getUserStats} = require('../controllers/userController')

// UPDATE
router.get('/update', (req, res) => res.render('./user/update_user'))
router.put('/:id', userAuthentication, updateUserById)

// DELETE
router.get('/delete', (req, res) => res.render('./user/delete_user'))
router.delete('/:id', userAuthentication, deleteUserById)

// GET
router.get('/find', (req, res) => res.render('./user/find_user_by_id'))
router.post('/find/:id', userAuthentication, adminAuthorization, getUserById)

// GET ALL USER
router.get('/', (req, res) => res.render('./user/find_all_user'))
router.post('/', userAuthentication, adminAuthorization, getAllUser)

// GET USER STATS
router.get('/stats', (req, res) => res.render('./user/stats'))
router.post('/stats', userAuthentication, adminAuthorization, getUserStats)

module.exports = router