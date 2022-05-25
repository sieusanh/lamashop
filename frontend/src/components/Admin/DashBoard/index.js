import {Container} from './StyledComponent'
import UserBoard from '../UserBoard'
import ProductBoard from '../ProductBoard'
import CartBoard from '../CartBoard'
import OrderBoard from '../OrderBoard'
import PaymentBoard from '../PaymentBoard'

function DashBoard() {
    return (
        <Container>
            <UserBoard />
            <ProductBoard />
            <CartBoard />
            <OrderBoard />
            <PaymentBoard />
        </Container>
    )
}

export default DashBoard