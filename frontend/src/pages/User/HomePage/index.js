import styled from 'styled-components'

import Slider from '../../../components/User/Slider'
import Categories from '../../../components/User/Categories'
import Products from '../../../components/User/Products'

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