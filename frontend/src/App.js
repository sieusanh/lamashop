import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import Navbar from './components/Navbar'
import Announcement from './components/Announcement'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import RegisterSuccessPage from './pages/RegisterSuccessPage'
import LoginPage from './pages/LoginPage'
import ProductListPage from './pages/ProductListPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import PaymentPage from './pages/PaymentPage'
import PaymentSuccessPage from './pages/PaymentSuccessPage'

const Container = styled.div``

function App() {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/registerSuccess' element={<RegisterSuccessPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/productlist' element={<ProductListPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/paymentSuccess' element={<PaymentSuccessPage />} />
      </Routes>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default App
