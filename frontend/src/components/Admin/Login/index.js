import axios from 'axios'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Header, Wrapper, Title, Form, 
    Input, ValidationError, Button } from './StyledComponents'
import { MyContext } from '../../../context'

function Login() {
    const {setAuthen} = useContext(MyContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        axios.post('/auth/login', { username, password })
        .then(res => {
            if (res.status >= 400) {
                console.log('Login failed! Please try again!')
                navigate('/login')
            }
            
            if (res.status === 200) { 
                const user = res.data
                localStorage.setItem('userId', user.id)
                localStorage.setItem('username', user.username)
                localStorage.setItem('isAdmin', user.isAdmin)
                localStorage.setItem('firstname', user.firstname)
                setAuthen(true)
                if (user.isAdmin) { 
                    navigate('/admin-dashboard')
                } else {
                    navigate('/')
                }
            }        
        })
        .catch(error => {
            const message = error.response.data.errors
            console.log('err: ', message)

            if (message.username) {
                setUsernameError(message.username)
                return
            }   
            if (message.password) {
                setPasswordError(message.password)
            }
        })
        setPassword('')
    } 
   
    return (
        <Container>
            <Header>ADMIN PAGE</Header>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input 
                        placeholder='Username'
                        value={username}
                        onChange = {e => {
                            setUsername(e.target.value)
                            setUsernameError('')
                        }}
                    />
                    <ValidationError>{usernameError}</ValidationError>
                    <Input 
                        placeholder='Password'
                        value={password}
                        onChange = {e => {
                            setPassword(e.target.value)
                            setPasswordError('')
                        }}
                        type='password'
                    />
                    <ValidationError>{passwordError}</ValidationError>
                    <Button onClick={handleSubmit}>LOGIN</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login