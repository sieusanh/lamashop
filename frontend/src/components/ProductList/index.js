import styled from 'styled-components'
import ProductFilter from '../../components/ProductFilter'
import Products from '../../components/Products'

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