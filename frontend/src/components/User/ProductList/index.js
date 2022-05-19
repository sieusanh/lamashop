import styled from 'styled-components'
import ProductFilter from '../ProductFilter'
import Products from '../Products'

const Container = styled.div``

function ProductList() {
    return (
        <Container>
            <ProductFilter />
            <Products />
        </Container>
    )
}

export default ProductList