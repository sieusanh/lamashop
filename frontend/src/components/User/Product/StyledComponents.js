import { Block } from '@material-ui/icons'
import styled from 'styled-components'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    max-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F5FBFD;
    position: relative;
    &:hover ${Info} {
        opacity: ${props => props.alert 
            ? `0`
            : `1`};
    }
    ${props => props.blur &&
        `
        filter: blur(8px);
        -webkit-filter: blur(8px);
        `   
    }
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

const Image = styled.img`
    height: 75%;
    z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #E9F5F5;
        transform: scale(1.1);
    }
    cursor: pointer;
`

const BlurBackground = styled.div`
    display: none;
    position: absolute;
    z-index: 4;
    width: 100%;
    height: 100%;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    background-color: rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease;
    ${props => props.blur &&
        `
        display: block;
        opacity: 1;
        `   
    }
`

const AlertContainer = styled.div`
    display: none;
    position: absolute;
    top: 148px;
    left: 70px;
    z-index: 5;
    width: 140px;
    height: 40px;
    // background-color: transparent;
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

export { Container, Circle, Image, Info, Icon, 
    BlurBackground, AlertContainer, LoginAlert, RemoveAlert }