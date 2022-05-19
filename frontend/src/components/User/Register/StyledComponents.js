import {Link} from 'react-router-dom'
import styled from 'styled-components'
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

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const InputField = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 62px;
    min-width: 40%;
    margin: 20px 10px -10px 0px;
`

const Input = styled.input`
    // flex: 1;
    // min-width: 40%;
    // margin: 20px 10px 0px 0px;
    height: 30px;
    flex: 1;
    padding: 10px;
`

const ValidationError = styled.div`
    color: red;
    height: 20px;
    flex: 1;
    min-width: 40%;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

export { Container, Logo, Wrapper, Title, 
    Form, InputField, Input, ValidationError, 
    Agreement, Button }