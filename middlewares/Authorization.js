'use strict'

const adminAuthorization = (req, res, next) => {
    if (req.user.isAdmin === true) {
        next()
        return
    } 
    res.status(403).json('You are not allowed!')
}

module.exports = {
    adminAuthorization
}