const Account = require('../models/Account')
const bcrypt = require('bcrypt')

function autoCreateAdmin() {
    Account.find({isAdmin: true})
    .then(admins => {
        if (admins.length == 0) {
            const adminArr = [
                {
                    username: 'admin_01',
                    password: 'Abc123@',
                    email: 'admin01@gmail.com',
                    firstname: 'Admin',
                    lastname: 'One',
                    isAdmin: true
                }, 
                {
                    username: 'admin_02',
                    password: 'Abc123@',
                    email: 'admin02@gmail.com',
                    firstname: 'Admin',
                    lastname: 'Two',
                    isAdmin: true
                }
            ]
            adminArr.forEach(async (admin) => {
                const {password, ...others} = admin
        
                const salt = await bcrypt.genSalt()
                const hashedPassword = await bcrypt.hash(password, salt)

                Account.create({ ...others, password: hashedPassword})
                .then(newAdmin => 
                    console.log(`Admin with username ${newAdmin.username} has created`)
                )
                .catch(err => console.log(err))
            })
        }
    })  
    .catch(err => console.log(err)) 
}

autoCreateAdmin()

const getUserById = async (req, res) => {
    try {
        const user = await Account.findById(req.params.id)
        if (!user)
            return res.status(404).json({message: 'User not found'})
        const {password, ...others} = user._doc
        res.status(200).json(others)
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
}

const getAllUser = async (req, res) => {
    const query = req.query.new
    try {
        const accounts = query 
        ? await Account.find().sort({_id: -1}).limit(5) 
        : await Account.find()
        for (let index in accounts) {
            let {password, ...others} = accounts[index]._doc
            accounts[index] = others
        }
        res.status(200).json(accounts)
    } catch(err) {
        res.status(500).json(err)
    }
}

const getUserStats = async (req, res) => {
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

    try {
        const data = await Account.aggregate([
            {$match: {createdAt: {$gte: lastYear}}},
            {$project: {month: {$month: "$createdAt"}}},
            {$group: {_id: '$month', total: {$sum: 1}}}
        ])
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {getUserById, getAllUser, getUserStats}