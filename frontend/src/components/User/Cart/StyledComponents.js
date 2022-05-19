import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { mobile } from '../../../responsive' 

const Container = styled.div`
`

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({
        padding: '10px'
    })}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled(Link)`
    text-decoration: none;
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' ? 'none' : '2px solid black'};
    background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props => props.type === 'filled' ? 'white' : 'black'};
`

const TopTexts = styled.div`
    ${mobile({ display: 'none' })}
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName =styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const Change = styled.div`
    cursor: pointer;
    &:hover {
        transform: scale(1.3);
    }
`

const Amount = styled.div`
    font-size: 24px;
    margin: 15px;
    ${mobile({ margin: '5px 15px' })}
`

const ProductPrice= styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: '20px' })}
`

const Hr = styled.hr`
    background-color: #EEE;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === 'total' && '500'};
    font-size: ${props => props.type === 'total' && '24px'};
`

const SummaryItemText = styled.span`
`

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

export { Container, Wrapper, Title, Top, TopButton, TopTexts, TopText, 
        Bottom, Info, Product, ProductDetail, Image, 
        Details, ProductName, ProductId, ProductColor, ProductSize, 
        PriceDetail, AmountContainer, Change, Amount, ProductPrice, Hr, 
        Summary, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice, Button}