import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Remove, Add } from '@material-ui/icons'
import { Container, Wrapper, ImageContainer, Image, 
    InfoContainer, Title, Desc, Price, FilterContainer, 
    Filter, FilterTitle, FilterColor, FilterSize, 
    FilterSizeOption, AddContainer, AmountContainer, 
    Change, Amount, Button, AlertContainer, LoginAlert, 
    RemoveAlert } 
from './StyledComponents'

function ProductInfo() {
    const location = useLocation()
    const [count, setCount] = useState(1)
    // const [loginAlert, setLoginAlert] = useState(false)
    const navigate = useNavigate()

    function decreaseCount(e) {
        e.preventDefault()
        if (count === 1) {
            return
        } else {
            setCount(count - 1)
        }
    }

    function increaseCount(e) {
        e.preventDefault() 
        setCount(count + 1)
    }

    function goToCart(e) {
        e.preventDefault()
        if (localStorage.getItem('userId')) {
            navigate('/cart')
        } else {
            // setLoginAlert(true)
            navigate('/login')
        }
    }
    return (
        <Container>
            <Wrapper>
                <ImageContainer>
                    <Image src={location.state.img}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Corrupti vero, velit architecto pariatur natus ad cumque voluptas ex, 
                        animi officiis maiores, molestiae iusto in blanditiis quisquam hic quis illo unde.
                    </Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color='black' />
                            <FilterColor color='darkblue' />
                            <FilterColor color='gray' />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Change onClick={decreaseCount}>
                                <Remove/>
                            </Change>
                            <Amount>{count}</Amount>
                            <Change onClick={increaseCount}>
                                <Add />
                            </Change>
                        </AmountContainer>
                        <Button 
                            onClick={goToCart}
                        >
                            ADD TO CART
                        </Button>
                    </AddContainer>
                    {/* <AlertContainer appear={loginAlert}>
                        <LoginAlert>
                            You must sign in
                        </LoginAlert>
                        <RemoveAlert 
                            onClick={e => setLoginAlert(false)}
                        >
                            &times;
                        </RemoveAlert>
                    </AlertContainer> */}
                </InfoContainer>
            </Wrapper>
        </Container>
    )
}

export default ProductInfo