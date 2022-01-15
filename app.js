'use strict'

const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const authRoute = require('./routes/auth')
// const userRoute = require('./routes/user')
// const productRoute = require('./routes/product')
// const cartRoute = require('./routes/cart')
// const orderRoute = require('./routes/order')
const paymentRoute = require('./routes/payment')

const app = express()
dotenv.config()

// middleware
app.use(express.json())
app.use(express.static('public'))
app.use(cors({
    origin: ["http://localhost:8080", "https://checkout.stripe.com"],
}))

// Database Connection
mongoose
    .connect(process.env.MONGO_URL)
    .then((result) => {
        console.log('Connect database successfully')
        const port = process.env.PORT || 8080
        app.listen(port, () => 
            console.log(`Server is running on port ${port}...`)
        )
    })
    .catch(err => console.log(err))
    
// Routes
app.use('/api/auth', authRoute)
// app.use('/api/users', userRoute)
// app.use('/api/products', productRoute)
// app.use('/api/carts', cartRoute)
// app.use('/api/orders', orderRoute)
app.use('/api/payment', paymentRoute)

// public resources
app.use('/images', express.static('images'))

app.get('/', (req, res) => res.render('index.html'))