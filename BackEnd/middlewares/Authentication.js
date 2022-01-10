'use strict'
const jwt = require('jsonwebtoken')

const userAuthentication = async (req, res, next) => {
    const {accessToken} = req.body
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
        if (err) {
            return res.status(403).json({ user: null, message: 'Access Token is not valid!' })    
        }       
        // res.status(200).json({message: 'You\'re now authenticated'})
        const {id, username, isAdmin} = decodedToken
        req.user = {id, username, isAdmin}
        next()
    })
}

module.exports = {userAuthentication}