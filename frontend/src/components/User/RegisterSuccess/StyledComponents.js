import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { mobile } from '../../../responsive' 

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') 
    center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Logo = styled(Link)`
    text-decoration: none; 
    color: #FFF;
    font-weight: bold;
    font-size: 64px;
    ${mobile({ fontSize: '24px'})}
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: '75%'})}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

export { Container, Logo, Wrapper, Title }