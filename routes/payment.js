
const router = require('express').Router()
const stripe = require('stripe')(process.env.STRIPE_KEY)

router.post('/payment', (req, res) => {
    const {tokenId: source, amount} = req.body
    stripe.charges.create({
        source,
        amount,
        currency: "usd"
    }, (stripeErr, stripeRes) => {
        if (stripeErr) return res.status(500).json(stripeErr)
        res.status(200).json(stripeRes)
    })
})

module.exports = router