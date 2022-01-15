import axios from 'axios'
import { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { Container, Wrapper, Title, Form, Input, ValidationError, Agreement, Button } from './StyledComponents'
import { useStore, actions } from '../../store'

function Register() {
    const [state, dispatch] = useStore()
    const {firstname, lastname, email, username} = state
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstnameError, setFirstnameError] = useState('') 
    const [lastnameError, setLastnameError] = useState('') 
    const [emailError, setEmailError] = useState('') 
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const buttonRef = useRef()
    console.log('buttonRef: ', buttonRef)
    useLayoutEffect(() => {
        const handleSubmit = () => {
            axios
            .post('/api/auth/signup', {
                firstname, lastname, email, username, password
            })  
            .then(res => {
                const data = res.data
                if (data.errors) {
                    setUsernameError(data.errors.username || '')
                    setPasswordError(data.errors.password || '')
                    setEmailError(data.errors.email || '')
                }
                if (data.user) 
                    <Navigate to='/registerSuccess' />
            })
            .catch(err => console.log(err))
            
            dispatch(actions.setFirstname(''))
            dispatch(actions.setLastname(''))
            dispatch(actions.setEmail(''))
            dispatch(actions.setUsername(''))
            setPassword('')
            setConfirmPassword('')
        }
        
        if (buttonRef && buttonRef.current) {
            buttonRef.current.addEventListener('click', handleSubmit)
            return () => buttonRef.current.removeEventListener('click', handleSubmit)
        }
    }, [])
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
                        onChange = {e => dispatch(actions.setLastname(e.target.value))}
                    />
                    <ValidationError 
                        value={lastnameError}
                    />
                    <Input 
                        placeholder='Email'
                        value={email}
                        onChange = {e => dispatch(actions.setEmail(e.target.value))}
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
                    <Button ref={buttonRef}>
                        CREATE
                    </Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register