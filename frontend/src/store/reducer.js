import {SET_FIRSTNAME, SET_LASTNAME, SET_EMAIL, SET_USERNAME} from './constants'

const initState = {
    firstname: '',
    lastname: '', 
    email: '', 
    username: ''
}

function reducer(state, action) {
    switch (action.type) {
        case SET_FIRSTNAME:
            return {
                ...state,
                firstname: action.payload
            }
        case SET_LASTNAME:
            return {
                ...state,
                lastname: action.payload
            }
        case SET_EMAIL:
            return {
                ...state, 
                email: action.payload
            }
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        default:
            throw new Error('Invalid action')
    }
} 

export { initState }
export default reducer