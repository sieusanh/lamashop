
const router = require('express').Router()
const {userAuthentication} = require('../middlewares/Authentication')
const {updateUserById, deleteUserById} = require('../controllers/user')

// UPDATE
router.put('/:id', userAuthentication, updateUserById)

// DELETE
router.delete('/:id', userAuthentication, deleteUserById)

module.exports = router