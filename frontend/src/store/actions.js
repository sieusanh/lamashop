import { SET_FIRSTNAME, SET_USERNAME, SET_ID, SET_ISADMIN, SET_EXP, SET_ACCESS_TOKEN } from './constants'

const setFirstname = payload => ({
    type: SET_FIRSTNAME,
    payload
})

const setUsername = payload => ({
    type: SET_USERNAME,
    payload 
})

const setId = payload => ({
    type: SET_ID,
    payload
})

const setIsAdmin = payload => ({
    type: SET_ISADMIN,
    payload
})

const setExp = payload => ({
    type: SET_EXP,
    payload
})

const setAccessToken = payload => ({
    type: SET_ACCESS_TOKEN,
    payload
})

export { setFirstname, setUsername, setId, setIsAdmin, setExp, setAccessToken }