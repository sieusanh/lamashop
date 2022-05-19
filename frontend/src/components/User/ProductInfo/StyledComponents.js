import styled from 'styled-components'
import { mobile } from '../../../responsive'

const Container = styled.div`
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({
        padding: '10px',
        flexDirection: 'column'
    })}
`

const ImageContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: '40vh' })}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: '10px' })}
`

const Title = styled.h1`
    font-weight: 200;   
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    margin: 30px 0px;  
    width: 50%;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: '100%' })}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: '100%' })}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    ${mobile({ width: '100%' })}
`

const Change = styled.div`
    cursor: pointer;
    &:hover {
        transform: scale(1.3);
    }
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: #F8F4F4;
    }
`

const AlertContainer = styled.div`
    display: none;
    position: absolute;
    top: 480px;
    right: 530px;
    z-index: 5;
    width: 140px;
    height: 40px;
    font-weight: bold;
    text-align: center;
    line-height: 40px;
    border: 2px solid;
    ${props => props.appear && 
        `display: block;
        `
    }
`

const LoginAlert = styled.div`
    cursor: default;
    color: red;
`

const RemoveAlert = styled.div`
    position: relative;
    top: -40px;
    right: -128px;
    z-index: 5;
    width: 10px;
    height: 10px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    line-height: 8px;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
`

export { Container, Wrapper, ImageContainer, Image, 
    InfoContainer, Title, Desc, Price, FilterContainer, 
    Filter, FilterTitle, FilterColor, FilterSize, 
    FilterSizeOption, AddContainer, AmountContainer, 
    Change, Amount, Button, AlertContainer, LoginAlert, 
    RemoveAlert }
        