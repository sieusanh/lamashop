import { MyLink } from '../../GlobalStyles'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import Badge from '@material-ui/core/Badge'

import { Container, Wrapper, Left, Language, SearchContainer, SearchInput, 
         Center, Logo, Right, MenuItem } from './StyledComponents'

function Navbar() {
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
                    <MenuItem>
                        <MyLink to='/register'>REGISTER</MyLink>
                    </MenuItem>
                    <MenuItem>
                        <MyLink to='/login'>SIGN IN</MyLink>
                    </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <MyLink to='/cart'>
                                <ShoppingCartOutlined />
                            </MyLink>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar