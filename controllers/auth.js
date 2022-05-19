const Account = require('../models/Account')
const Cart = require('../models/Cart')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// handle errors
const handleErrors = (err) => {
    const errors = {}

    // Login incorrect input value
    if (err.message === 'Incorrect email')
        errors.email = 'This email is not registered'

    if (err.message === 'Incorrect username')
        errors.username = 'Incorrect username'
    
    if (err.message === 'Incorrect password')
        errors.password = 'Incorrect password'

    if (err.message.includes('Please enter a valid email'))
        errors.email = 'Invalid email address'
    
    // duplicate error code
    if (err.code === 11000) {
        if (err.message.includes('username')) {
            errors.username = 'This username is already registered'
        }
        if (err.message.includes('email')) {
            errors.email = 'This email is already registered' 
        }
    }

    // validation errors
    if (!err.errors)
        return errors
    // const errorKeys = Object.keys(err.errors)
    // errorKeys.forEach(fieldName => 
    //     errors[fieldName] = err.errors[fieldName].message
    // )
    return errors
}

// Generating tokens
const generateAccessToken = userInfo => {
    const exp = Math.floor(Date.now() / 1000) + process.env.TOKEN_EXPIRED_IN * 60 * 60
    const accessToken = jwt.sign(
            userInfo, 
            process.env.ACCESS_TOKEN_SECRET, 
            {expiresIn: process.env.TOKEN_EXPIRED_IN + "h"}
        )
    return {accessToken, exp}
}

const Signup = async (req, res) => {
    const { username, password, ...others } = req.body 
    if (username.includes('admin') || username.includes('Admin')) {
        throw Error('Username must not contain "admin" keywords')
    }

    try{
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)

        const account = await Account.create({ 
            username,
            password: hashedPassword,
            ...others
        })

        if (!account) {
            throw Error('Error happen when create account')
        }

        const cart = await Cart.create({userId: account._id, products: []})
        if (!cart) {
            throw Error('Error happen when create a new cart.')
        }
        
        res.status(201).json({ user: account._id })
    } catch(err) {
        const errors = handleErrors(err)
        console.log('Loi: ', errors)
        res.status(400).json({errors})
    }
}

const Login = async (req, res) => {
    const {username, password} = req.body

    Account.login(username, password)
    .then(account => {
        if (account) {
            const {_id: id, firstname, isAdmin} = account
            const userInfo = {id, username, firstname, isAdmin}
            
            const {accessToken} = generateAccessToken(userInfo)

            res.cookie('accessToken', accessToken, {httpOnly: true, secure: true})
            res.status(200).json(userInfo)
        }
    })
    .catch(err => {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    })
}

const Logout = (req, res) => {
    res.clearCookie('accessToken')
    res.clearCookie('connect.sid')
    res.status(204).json({message: 'See you again!'})
}

module.exports = {Signup, Login, Logout}