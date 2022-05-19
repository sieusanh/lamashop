
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { mobile, wideScreen } from '../../../responsive'

const Container = styled.div`
    height: 60px;
    ${mobile({ height: '50px'})}
`

const Wrapper = styled.div`
    padding: 10px 20px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: '10px 0'})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
`

const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: 'none'})}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const SearchInput = styled.input`
    border: none;
    &:focus {
        outline: none;
    };
    ${mobile({ width: '60px'})}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const MyLink = styled(Link)`
    text-decoration: none;
    color: #000;
`

const Logo = styled(MyLink)`
    font-weight: bold;
    font-size: 24px;
    ${mobile({ fontSize: '24px'})}
`

const Right = styled.div`
    flex: 1;
`

const RightContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: 'center'})}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    &:hover {
        font-weight: 600;
        transform: scale(1.1);
    };
    ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`

const Logout = styled.div`
`

export { Container, Wrapper, Left, Language, 
    SearchContainer, SearchInput, Center, Logo, 
    Right, RightContainer, MenuItem, Logout, 
    MyLink }