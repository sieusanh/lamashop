import { SET_FIRSTNAME, SET_USERNAME, SET_ID, SET_ISADMIN, SET_EXP, SET_ACCESS_TOKEN } from './constants'

const initState = {
    firstname: '',
    username: '',
    id: '',
    isAdmin: false,
    exp: '',
    accessToken: ''
}

function reducer(state, action) {
    switch (action.type) {
        case SET_FIRSTNAME:
            return {
                ...state,
                firstname: action.payload
            }
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        case SET_ID:
            return {
                ...state,
                id: action.payload
            }
        case SET_ISADMIN:
            return {
                ...state,
                isAdmin: action.payload
            }
        case SET_EXP:
            return {
                ...state,
                exp: action.payload
            } 
        case SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.payload
            } 
        default:
            throw new Error('Invalid action')
    }
} 

export { initState }
export default reducer