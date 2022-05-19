import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../../../context'

import { Container, Wrapper, Right, RightContainer, 
    MenuItem, Logout, MyLink } from './StyledComponents'

function Authenticated() {
    const navigate = useNavigate()

    function handleLogout(e) {
        e.preventDefault()
        axios.get('/auth/logout')
        .then(res => {
            if (res.status === 204) {
                localStorage.clear()
                navigate('/')
                window.location.reload()
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <RightContainer>
            <MenuItem>
                Hi {localStorage.getItem('firstname')}!
            </MenuItem>
            <MenuItem>
                <Logout onClick={handleLogout}>LOG OUT</Logout>
            </MenuItem>
        </RightContainer>  
    )           
}

function AdminNavbar() {
    const {authen} = useContext(MyContext)
    return (
        <Container>
            <Wrapper>
                {authen && <Authenticated/>}
            </Wrapper>
        </Container>
    )
}

export default AdminNavbar