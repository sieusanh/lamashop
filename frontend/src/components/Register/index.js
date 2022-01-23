import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Wrapper, Title, Form, Input, ValidationError, Agreement, Button } from './StyledComponents'
import { useStore, actions } from '../../store'

function Register() {
    const [state, dispatch] = useStore()
    const {firstname, username} = state
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstnameError, setFirstnameError] = useState('') 
    const [lastnameError, setLastnameError] = useState('') 
    const [emailError, setEmailError] = useState('') 
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()

        axios.post('/api/auth/signup', {
            firstname, lastname, email, username, password
        })
        .then(res => {
            const data = res.data
            if (data.errors) {
                setUsernameError(data.errors.username || '')
                setPasswordError(data.errors.password || '')
                setEmailError(data.errors.email || '')
            }
            if (data.user) {
                console.log('success')
                navigate('/registerSuccess')
            }
        })
        .catch(error => console.log('err: ', error))
        setLastname('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    } 
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input 
                        placeholder='First name'
                        value={firstname}
                        onChange = {e => dispatch(actions.setFirstname(e.target.value))}
                    />
                    <ValidationError 
                        value={firstnameError}
                    />
                    <Input 
                        placeholder='Last name'
                        value={lastname}
                        onChange = {e => setLastname(e.target.value)}
                    />
                    <ValidationError 
                        value={lastnameError}
                    />
                    <Input 
                        placeholder='Email'
                        value={email}
                        onChange = {e => setEmail(e.target.value)}
                    />
                    <ValidationError 
                        value={emailError}
                    />
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
                    <Input 
                        placeholder='Confirm password'
                        value={confirmPassword} 
                        onChange = {e => setConfirmPassword(e.target.value)}
                        type='password'
                    />
                    <ValidationError 
                        value={confirmPasswordError}
                    />
                    <Agreement>
                        By creating an account, i consent to the processing of my personal data 
                        in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button onClick={handleSubmit}>
                        CREATE
                    </Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register