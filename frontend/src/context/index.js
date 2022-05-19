import {useState, createContext} from 'react'

const MyContext = createContext()

function MyProvider({ children }) {
    const [authen, setAuthen] = useState(false)

    const value = {
        authen, setAuthen
    }

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}

export {MyContext} 
export default MyProvider