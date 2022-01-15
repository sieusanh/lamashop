import { SET_FIRSTNAME, SET_LASTNAME, SET_EMAIL, SET_USERNAME } from './constants'

const setFirstname = payload => ({
    payload, 
    type: SET_FIRSTNAME
})

const setLastname = payload => ({
    payload, 
    type: SET_LASTNAME
})

const setEmail = payload => ({
    payload, 
    type: SET_EMAIL
})

const setUsername = payload => ({
    payload, 
    type: SET_USERNAME
})


export { setFirstname, setLastname, setEmail, setUsername }