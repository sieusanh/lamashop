import styled from 'styled-components'

import Slider from '../../components/Slider'
import Categories from '../../components/Categories'
import Products from '../../components/Products'

const Container = styled.div``

function HomePage() {
    return (
        <Container>
            <Slider />
            <Categories />
            <Products />
        </Container>
    )
}

export default HomePage