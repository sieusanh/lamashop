'use strict'
const mongoose = require('mongoose')
const {isEmail, matches} = require('validator')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema(
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
            minLength: [6, 'Minimum password length is 6 characters']
        },
        email: {
            type: String,
            required: [true, 'Please enter an email'],
            unique: [true, 'Please try another email'],
            lowercase: true,
            validate: [isEmail, 'Please enter a valid email']
        },
        isAdmin: {
            type: Boolean,
            default: false
        }
    },  
    {timestamps: true}
)

// Mongoose Hooks

// pre hook
// fire a function before document saved to db
// this happens before the save event
UserSchema.pre('save', async function(next) {
    // "this" keyword prefer to the instance of User Model
    // before the save event happens
    // console.log('user about to be created & saved', this)

    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

// post hook
// fire a function after document saved to db
// this happens after the save event
UserSchema.post('save', function(doc, next) {
    // console.log('new user was created & saved', doc)
    next()
})

// static method to login user
UserSchema.statics.login = async function(username, password) {
    const user = await this.findOne({ username })
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) 
            return user
        throw Error('Incorrect password')
    }
    throw Error('Incorrect username')
}

module.exports = mongoose.model("User", UserSchema)