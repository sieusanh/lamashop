'use strict'
const Account = require('../models/Account')

const updateUserById = (req, res) => {
    const {accessToken, ...others} = req.body
    Account.findByIdAndUpdate(req.params.id, {$set: others}, {new: true})
    .then(user => {
        if (user) {
            res.status(200).json(user)
        }
    })
    .catch(err => res.status(500).json(err))
}

const deleteUserById = (req, res) => {
    Account.findByIdAndDelete(req.params.id)
    .then(account => {
        if (account) {
            res.status(200).json({
                message: `Xóa tài khoản 
                    ${account.username} thành công.`
            })
        }
    })
    .catch(err => res.status(500).json(err))
}

module.exports = {updateUserById, deleteUserById}