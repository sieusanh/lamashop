const User = require('../models/User')
const jwt = require('jsonwebtoken')

// handle errors
const handleErrors = (err) => {
    const errors = {}

    // Login incorrect input value
    if (err.message === 'Incorrect email')
        errors.email = 'This email is not registered'
    
    if (err.message === 'Incorrect password')
        errors.password = 'This password is incorrect'
    
    // duplicate error code
    if (err.code === 11000) {
        errors.email = 'This email is already registered'
        return errors
    }

    // validation errors
    if (!err.errors)
        return errors
        
    const errorKeys = Object.keys(err.errors)
    errorKeys.forEach(fieldName => 
        errors[fieldName] = err.errors[fieldName].message
    )
    return errors
}

// Generating tokens
const generateAccessToken = user => {
    const {id, username, isAdmin} = user
    const exp = Math.floor(Date.now() / 1000) + process.env.TOKEN_EXPIRED_IN * 60 * 60
    const accessToken = jwt.sign(
            { id, username, isAdmin }, 
            process.env.ACCESS_TOKEN_SECRET, 
            {expiresIn: process.env.TOKEN_EXPIRED_IN + "h"}
        )
    return {accessToken, exp}
}

const signup_get = (req, res) => {
    res.render('signup')
}

const login_get = (req, res) => {
    res.render('login')
}

const signup_post = async (req, res) => {
    const {username, password, email} = req.body

    try {
        const user = await User.create({ username, password, email})
        res.status(201).json({ user: user._id })
    } catch(err) {
        const errors = handleErrors(err)
        res.status(400).json({errors})
    }
}

const login_post = async (req, res) => {
    const {username, password} = req.body
    const userObj = {id: '', username: '', isAdmin: ''}

    try {
        const user = await User.login(username, password)
        userObj.id = user._doc._id
        userObj.username = user._doc.username
        userObj.isAdmin = user._doc.isAdmin
        
        const {accessToken, exp} = generateAccessToken(userObj)
        res.status(200).json({user: userObj, exp, accessToken})
    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
}

const logout_get = async (req, res) => {
    // response without content
    res.status(204).json({message: 'Goodbye!'})
}

module.exports = {
    signup_get, signup_post, login_get, 
    login_post, logout_get
}