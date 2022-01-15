import StripeCheckout from 'react-stripe-checkout'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { Container, Button } from './StyledComponents'


function Payment() {
    const [stripeToken, setStripeToken] = useState(null)
    console.log('stripeToken: ', stripeToken)
    const onToken = token => {
        setStripeToken(token)
    }
    // useEffect(() => {
    //     function makeRequest() {
    //         axios
    //         .post('http://localhost:8080/api/payment/checkout', {
    //             tokenId: stripeToken.id, 
    //             amount: 2000
    //         })  
    //         .then(res => {
    //             console.log('res.status= ', res.status)
    //             const data = res.data
    //             console.log('res.data= ', data)
    //             if (res.status === 200) 
    //                 <Navigate to='/paymentSuccess' />
    //         })
    //         .catch(err => console.log(err))
    //     }
    //     stripeToken && makeRequest()
    // }, [stripeToken])
    return (
        <Container>
            {/* {stripeToken ? (<span>Processing. Please wait...</span>) : (

                <StripeCheckout 
                    name='Lama Shop' 
                    image='https://avatars.githubusercontent.com/u/1486366?v=4'
                    billingAddress
                    shippingAddress
                    description='Your total is $20'
                    amount={2000}
                    token={onToken}
                    stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
                >
                    <Button>Pay Now</Button>
                </StripeCheckout>
            )} */}
            <StripeCheckout 
                name='Lama Shop' 
                image='https://avatars.githubusercontent.com/u/1486366?v=4'
                billingAddress
                shippingAddress
                description='Your total is $20'
                amount={2000}
                token={onToken}
                stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
            >
                <Button>Pay Now</Button>
            </StripeCheckout>
        </Container>
    )
}

export default Payment