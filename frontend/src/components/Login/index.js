import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Wrapper, Title, Form, Input, ValidationError, Button, Link } from './StyledComponents'
import { useStore, actions } from '../../store'

function Login() {
    const [state, dispatch] = useStore()
    const {username} = state
    const [password, setPassword] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()

        axios.post('/api/auth/login', { username, password })
        .then(res => {
            const data = res.data
            if (res.status >= 400) {
                console.log('Login failed! Please try again!')
                navigate('/login')
            }
            if (data.errors) {
                setUsernameError(data.errors.username || '')
                setPasswordError(data.errors.password || '')
            }
            //
            if (data.user && data.exp && data.accessToken) { 
                const user = data.user
                console.log('firstname:', user.firstname)
                console.log('id: ', user.id)
                console.log('isAdmin: ', user.isAdmin)
                console.log('accessToken: ', data.accessToken)
                dispatch(actions.setId(user.id))
                dispatch(actions.setIsAdmin(user.isAdmin))
                dispatch(actions.setExp(data.exp))
                dispatch(actions.setFirstname(user.firstname))
                dispatch(actions.setAccessToken(data.accessToken))
                dispatch(actions.setAuthen(true))
                navigate('/')
            }        
        })
        .catch(error => console.log('err: ', error))
        setPassword('')
    } 
   
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input 
                        placeholder='Username'
                        value={username}
                        onChange = {e => dispatch(actions.setUsername(e.target.value))}
                    />
                    <ValidationError 
                        value={usernameError}
                    />
                    <Input 
                        placeholder='Password'
                        value={password}
                        onChange = {e => setPassword(e.target.value)}
                        type='password'
                    />
                    <ValidationError 
                        value={passwordError}
                    />
                    <Button onClick={handleSubmit}>LOGIN</Button>
                    <Link>FORGET PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login