import { Container, } from './StyledComponents'
import { popularProducts } from '../../data'
import Product from '../Product'

function Products() {
    return (
        <Container>
            {popularProducts.map(item => (
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Products