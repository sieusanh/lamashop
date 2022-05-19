import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    border: none;
    width: 120px;
    border-radius: 5px;
    padding: 20px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`

export { Container, Button}