
import styled from 'styled-components'
import { mobile} from '../../../responsive'

const Container = styled.div`
    height: 60px;
    ${mobile({ height: '50px'})}
`

const Wrapper = styled.div`
    padding: 10px 20px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: '10px 0'})}
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
    ${mobile({ flex: 2, justifyContent: 'center'})}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    &:hover {
        font-weight: 600;
        transform: scale(1.1);
    };
    ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`

const Logout = styled.div`
`

export { Container, Wrapper, Center, RightContainer, 
    MenuItem, Logout }