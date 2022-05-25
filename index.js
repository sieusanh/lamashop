'use strict'

const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const adminRoute = require('./routes/admin')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
// const orderRoute = require('./routes/order')
const paymentRoute = require('./routes/payment')

const cookieParser = require('cookie-parser')

// csrf protection
const csrf = require('csurf')

// session management using cookies
const session = require('express-session')

const csrfProtection = csrf({ cookie: true })

const app = express()
dotenv.config()

// 
app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
        httpOnly: true // httpOnly is true by default
    }
}))

// Development
app.get('/', csrfProtection, (req, res) =>
    res.render('/frontend/public/index.html', {
        csrfToken: req.csrfToken()
    })
)

// Deployment
// app.get('/', csrfProtection, (req, res) => 
//     res.render('index.html', { 
//         csrfToken: req.csrfToken() 
//     })
// )

// Database Connection
mongoose
    .connect(process.env.MONGO_URL)
    .then(result => {
        console.log('Connect database successfully')
        app.listen(process.env.PORT, () => console.log(`Server is running...`))
    })
    .catch(err => console.log(err))
    
// Routes
app.use('/auth', authRoute)
app.use('/user', userRoute)
app.use('/admin', adminRoute)
app.use('/product', productRoute)
app.use('/cart', cartRoute)
// app.use('/order', orderRoute)
app.use('/payment', paymentRoute)

// public resources
app.use('/images', express.static('images'))