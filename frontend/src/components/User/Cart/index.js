import axios from 'axios'
import { Remove, Add } from '@material-ui/icons'
import { useEffect, useState } from 'react'

import { Container, Wrapper, Title, Top, TopButton, 
    TopTexts, TopText, Bottom, Info, Product, 
    ProductDetail, Image, Details, ProductName, 
    ProductId, ProductColor, ProductSize, PriceDetail, 
    AmountContainer, Change, Amount, ProductPrice, Hr, 
    Summary, SummaryTitle, SummaryItem, SummaryItemText, 
    SummaryItemPrice, Button} from './StyledComponents'

function Cart() {
    const [cart, setCart] = useState([])
    const [subTotal, setSubTotal] = useState(0)
    const [shippingFee, setShippingFee] = useState(5.90)
    const [shippingDiscount, setShippingDiscount] = useState(5.90)
    useEffect(() => {
        axios.get('/cart/user-cart/' + localStorage.getItem('userId'))
        .then(res => {
            if (res.status === 200) {
                setCart(res.data)
                var value = 0
                res.data.forEach(product => {
                    value += product.quantity * product.price
                })
                setSubTotal(value)
            }
        })
    }, [])
    
    return (
        <Container>
            <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <TopButton to='/product-list'>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Cart ({cart.length})</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type='filled' to='/'>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.map(product => (
                            <Product>
                                <ProductDetail>
                                    <Image src={product.image} />
                                    <Details>
                                        <ProductName><b>Product:</b> {product.title}</ProductName>
                                        <ProductId><b>ID:</b> {product.productId}</ProductId>
                                        <ProductColor color={product.color}/>
                                        <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <AmountContainer>
                                        <Change>
                                            <Remove/>
                                        </Change>
                                        <Amount>{product.quantity}</Amount>
                                        <Change>
                                            <Add />
                                        </Change>
                                    </AmountContainer>
                                    <ProductPrice>$ {product.price}</ProductPrice>
                                </PriceDetail>
                                <Hr />
                            </Product>
                        ))}
                        {/* <Product>
                            <ProductDetail>
                                <Image src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A'/>
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>ID:</b> 93813718293</ProductId>
                                    <ProductColor color='black'/>
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <AmountContainer>
                                    <Change>
                                        <Remove/>
                                    </Change>
                                    <Amount>1</Amount>
                                    <Change>
                                        <Add />
                                    </Change>
                                </AmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png'/>
                                <Details>
                                    <ProductName><b>Product:</b> HAKURA T-SHIRT</ProductName>
                                    <ProductId><b>ID:</b> 93813718293</ProductId>
                                    <ProductColor color='gray'/>
                                    <ProductSize><b>Size:</b> M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <AmountContainer>
                                    <Change>
                                        <Remove/>
                                    </Change>
                                    <Amount>1</Amount>
                                    <Change>
                                        <Add />
                                    </Change>
                                </AmountContainer>
                                <ProductPrice>$ 20</ProductPrice>
                            </PriceDetail>
                        </Product> */}
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {subTotal}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ {shippingFee}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -{shippingDiscount}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem  type='total'>
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>
                                $ {subTotal + shippingFee - shippingDiscount}
                            </SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Cart