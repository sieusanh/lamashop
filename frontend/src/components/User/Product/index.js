import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons'
import { Container, Circle, Image, Info, Icon, 
    BlurBackground, AlertContainer, LoginAlert, RemoveAlert } from './StyledComponents'
// import { useStore } from '../../store'
import { MyContext } from '../../../context'

function Product({ item }) {
    // const [state, dispatch] = useStore()
    const {authen} = useContext(MyContext)
    const [loginAlert, setLoginAlert] = useState(false)
    const navigate = useNavigate()
    function goToCart(e) {
        e.preventDefault()
        // const {authen} = state
        if (authen) {
            navigate('/cart')
        } else {
            setLoginAlert(true)
        }
    }
    
    function goToProductInfo(e) {
        e.preventDefault()
        navigate('/product-info', {state: {img: item.img}})
    }
    return (
        <Container alert={loginAlert}>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon onClick={goToCart}>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon onClick={goToProductInfo}>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
            <BlurBackground blur={loginAlert} />
            <AlertContainer appear={loginAlert}>
                <LoginAlert>
                    You must sign in
                </LoginAlert>
                <RemoveAlert 
                    onClick={e => setLoginAlert(false)}
                >
                    &times;
                </RemoveAlert>
            </AlertContainer>
        </Container>
    )
}

export default Product