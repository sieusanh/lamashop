import { Container, } from './StyledComponents'
import CategoryItem from '../CategoryItem'
import { categories } from '../../../data'

function Categories() {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Categories