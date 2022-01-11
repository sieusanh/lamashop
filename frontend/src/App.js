import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import Navbar from './components/Navbar'
import Announcement from './components/Announcement'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProductListPage from './pages/ProductListPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'

const Container = styled.div``

function App() {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/productlist' element={<ProductListPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default App
