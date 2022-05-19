import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Logo, Wrapper, Title, 
    Form, InputField, Input, ValidationError, 
    Agreement, Button } from './StyledComponents'

function Register() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstnameError, setFirstnameError] = useState('') 
    const [lastnameError, setLastnameError] = useState('') 
    const [emailError, setEmailError] = useState('') 
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()

        if (!confirmPassword) {
            setConfirmPasswordError('Please confirm password')
            return
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError('Unmatched password')
            return
        } else {
            setConfirmPasswordError('')
        }

        if (!username) {
            setUsernameError('Username must not be empty')
            return
        }
        
        if (!password) {
            setPasswordError('Password must not be empty')
            return
        }

        if (password.length < 6) {
            setPasswordError('Password length must be longer than 6')
            return
        }
        
        if (!email) {
            setEmailError('Email must not be empty')
            return
        }
        
        if (!firstname) { 
            setFirstnameError('First name must not be empty')
            return
        }

        axios.post('/auth/signup', {
            firstname, lastname, email, username, password
        })
        .then(res => {
            const data = res.data
            if (data.user) {
                navigate('/register-success')
            }
        })
        .catch(error => {
            const message = error.response.data.errors
            if (message.firstname) {
                setFirstnameError(message.firstname)
                return
            }          
            if (message.email) {
                setEmailError(message.email)
                return
            }
            if (message.username) {
                setUsernameError(message.username)
                return
            }
            if (message.password) {
                setPassword(message.password)
            }
        })
    } 
    return (
        <Container>
            <Logo to='/'>LAMA.</Logo>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <InputField>
                        <Input 
                            placeholder='First name'
                            value={firstname}
                            onChange = {e => {
                                setFirstname(e.target.value)
                                setFirstnameError('')
                            }}
                        />
                        <ValidationError>
                            {firstnameError}
                        </ValidationError> 
                    </InputField>
                    <InputField>
                        <Input 
                            placeholder='Last name'
                            value={lastname}
                            onChange = {e => {
                                setLastname(e.target.value)
                                setLastnameError('')
                            }}
                        />
                        <ValidationError>
                            {lastnameError}
                        </ValidationError>
                    </InputField>
                    <InputField>
                        <Input 
                            placeholder='Email'
                            value={email}
                            onChange = {e => {
                                setEmail(e.target.value)
                                setEmailError('')
                            }}
                        />
                        <ValidationError>
                            {emailError}
                        </ValidationError>
                    </InputField>
                    <InputField>
                        <Input 
                            placeholder='Username'
                            value={username}
                            onChange = {e => {
                                setUsername(e.target.value)
                                setUsernameError('')
                            }}
                        />
                        <ValidationError>
                            {usernameError}
                        </ValidationError>
                    </InputField>
                    <InputField>
                        <Input 
                            placeholder='Password'
                            value={password}
                            onChange = {e => {
                                setPassword(e.target.value)
                                setPasswordError('')
                            }}
                            type='password'
                        />
                        <ValidationError>
                            {passwordError}
                        </ValidationError>
                    </InputField>
                    <InputField>
                        <Input 
                            placeholder='Confirm password'
                            value={confirmPassword} 
                            onChange = {e => {
                                setConfirmPassword(e.target.value)
                                setConfirmPasswordError('')
                            }}
                            type='password'
                        />
                        <ValidationError>
                            {confirmPasswordError}
                        </ValidationError>
                    </InputField>
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