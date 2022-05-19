'use strict'
const mongoose = require('mongoose')
const {isEmail, matches} = require('validator')
const bcrypt = require('bcrypt')

const AccountSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Please enter an username'],
            unique: [true, 'Please try another username'],
            lowercase: true,
            // validate: [matches("^[a-zA-Z0-9_\.\-]*$"), 'Please enter a valid username']
            // validate: {
            //     validator: matches("^[a-zA-Z0-9_\.\-]*$"),
            //     message: () => 'Please enter a valid username'
            // }
        },
        password: {
            type: String, 
            required: [true, 'Please enter an password'],
            minLength: 6,//, 'Minimum password length is 6 characters']
        },
        email: {
            type: String,
            required: [true, 'Please enter an email'],
            unique: [true, 'Please try another email'],
            lowercase: true,
            validate: [isEmail, 'Please enter a valid email']
        },
        firstname: {
            type: String, 
            required: [true, 'Please enter an firstname'],
        },
        lastname: {
            type: String,
        },
        isAdmin: {
            type: Boolean,
            default: false
        }
    },  
    {timestamps: true}
)

// static method to login user
AccountSchema.statics.login = async function(username, password) {
    const account = await this.findOne({ username })
    if (account) {
        const auth = await bcrypt.compare(password, account.password)
        if (auth) 
            return account
        throw Error('Incorrect password')
    }
    throw Error('Incorrect username')
}

module.exports = mongoose.model("Account", AccountSchema)