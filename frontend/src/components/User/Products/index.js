import {useState} from 'react'

import { Container, } from './StyledComponents'
import { popularProducts } from '../../../data'
import Product from '../Product'
import { useEffect } from 'react'
import axios from 'axios'

function Products() {    
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('/api/products/get-products')
        .then(res => {
            setProducts(res.data)
        })
    }, [])
    return (
        <Container>
            {popularProducts.map(item => (
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Products