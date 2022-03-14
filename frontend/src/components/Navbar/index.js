import Badge from '@material-ui/core/Badge'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { useNavigate } from 'react-router-dom'
import { MyLink } from '../../GlobalStyles'
import { useStore, actions } from '../../store'

import { Container, Wrapper, Left, Language, SearchContainer, SearchInput, Center, Logo, 
    Right, RightContainer, MenuItem, Logout } from './StyledComponents'

function Authenticated() {
    const [state, dispatch] = useStore()
    const {firstname} = state
    const navigate = useNavigate()

    const handleLogout = event => {
        event.preventDefault()
        localStorage.clear()
        dispatch(actions.setAuthen(false))
        navigate('/')
        //...
    }
    return (
        <RightContainer>
            <MenuItem>
                Hi {firstname}!
            </MenuItem>
            <MenuItem>
                <Logout onClick={handleLogout}>LOG OUT</Logout>
            </MenuItem>
            <MenuItem>
                <Badge badgeContent={0} color="primary">
                    <MyLink to='/cart'>
                        <ShoppingCartOutlined />
                    </MyLink>
                </Badge>
            </MenuItem>
        </RightContainer>  
    )           
}

function Unauthenticated() {
    return (
        <RightContainer>
            <MenuItem>
                <MyLink to='/register'>REGISTER</MyLink>
            </MenuItem>
            <MenuItem>
                <MyLink to='/login'>SIGN IN</MyLink>
            </MenuItem>
            <MenuItem>
                <Badge badgeContent={0} color="primary">
                    <MyLink to='/cart'>
                        <ShoppingCartOutlined />
                    </MyLink>
                </Badge>
            </MenuItem>
        </RightContainer>  
    )           
}

function Navbar() {
    const [state, dispatch] = useStore()
    const {authen, exp} = state

    // auto logout if the token is expired
    if (exp) {
        if (Date.now() >= exp * 1000)
            localStorage.clear()
    } 
    
    // const cartAnchor = document.getElementById('cart-anchor')
    // const itemCount = document.getElementById('item-count')
    // cartAnchor.addEventListener('click', (e) => {
    //     e.preventDefault()
    //     fetch('/api/carts/checkCart', {
    //     method: 'POST',
    //     body: JSON.stringify({ 
    //         accessToken: localStorage.getItem('accessToken')
    //     }),
    //     headers: { 
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     }
    //     })
    //     .then(res => {
    //     if (res.status >= 400){
    //         location.assign('/api/auth/login')
    //         return
    //     }
    //     location.assign('/api/carts/checkCart')
    //     })
    // })

    // fetch('/api/carts/find/' + localStorage.getItem('id'), {
    //     method: 'POST',
    //     body: JSON.stringify({ 
    //     accessToken: localStorage.getItem('accessToken')
    //     }),               
    //     headers: { 
    //     'Content-Type': 'application/json', 
    //     'Accept': 'application/json'
    //     }
    // })
    // .then(res => {
    //     if (res.status === 500)
    //     throw res.json()
    //     if (res.status === 404) {
    //     fetch('/api/carts/create', {
    //         method: 'POST',
    //         body: JSON.stringify({ 
    //         accessToken: localStorage.getItem('accessToken'),
    //         userId: localStorage.getItem('id'), 
    //         prorducts: []  
    //         }),               
    //         headers: { 
    //         'Content-Type': 'application/json', 
    //         'Accept': 'application/json'
    //         }
    //     })
    //     .then(res => {
    //         if (res.status === 500)
    //         throw res.json()
    //         if (res.status === 200)
    //         return res.json()
    //     })
    //     .then(data => {
    //         localStorage.setItem('cartId', data._id)
    //     })
    //     .catch(err => console.log(err))
    //     throw 'Cancel'
    //     }

    //     if (res.status === 200)
    //     return res.json()
    // })
    // .then(data => {
    //     localStorage.setItem('cartId', data._id)
    //     if (data.products.length > 0)
    //     itemCount.textContent = data.products.length
    // })
    // .catch(err => console.log(err))
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <SearchInput placeholder='Search' />
                        <Search style={{
                            color: 'gray', 
                            fontSize: '16px',
                            cursor: 'pointer'
                        }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        <MyLink to='/'>
                            LAMA.
                        </MyLink>
                    </Logo>
                </Center>
                <Right>
                    {authen && <Authenticated />}
                    {!authen && <Unauthenticated />}
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar