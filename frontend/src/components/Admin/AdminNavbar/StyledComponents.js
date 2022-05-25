
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const RightContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    &:hover {
        font-weight: 600;
        transform: scale(1.1);
    };
`

const Logout = styled.div`
`

export { Container, Wrapper, Center, RightContainer, 
    MenuItem, Logout }