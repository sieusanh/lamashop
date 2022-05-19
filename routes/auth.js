const router = require('express').Router()
const {Signup, Login, Logout} = require('../controllers/auth')

router.post('/signup', Signup)
router.post('/login', Login)
router.get('/logout', Logout) 

module.exports = router
