import { Routes, Route, Outlet } from 'react-router-dom'
import styled from 'styled-components'

import Navbar from './components/User/Navbar'
import Announcement from './components/User/Announcement'
import Newsletter from './components/User/Newsletter'
import Footer from './components/User/Footer'
import HomePage from './pages/User/HomePage'
import RegisterPage from './pages/User/RegisterPage'
import RegisterSuccessPage from './pages/User/RegisterSuccessPage'
import LoginPage from './pages/User/LoginPage'
import ProductListPage from './pages/User/ProductListPage'
import ProductInfoPage from './pages/User/ProductInfoPage'
import CartPage from './pages/User/CartPage'
import PaymentPage from './pages/User/PaymentPage'
import PaymentSuccessPage from './pages/User/PaymentSuccessPage'
import AdminNavbar from './components/Admin/AdminNavbar'
import AdminLoginPage from './pages/Admin/AdminLoginPage'
import DashBoardPage from './pages/Admin/DashBoardPage'

import MyProvider from './context'

const Container = styled.div``

function WithNav() {
    return (
        <>
            <Navbar />
            <Announcement />
            <Outlet />
        </>
    )
}

function WithoutNav() {
    return <Outlet />
}

function UserInterface() {
    return (
        <MyProvider>
            <Container>
                <Routes>
                    <Route element={<WithNav />}>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/product-list' element={<ProductListPage />} />
                        <Route path='/product-info' element={<ProductInfoPage />} />
                        <Route path='/cart' element={<CartPage />} />
                        <Route path='/payment' element={<PaymentPage />} />
                        <Route path='/payment-success' element={<PaymentSuccessPage />} />
                    </Route>
                    <Route element={<WithoutNav />}>
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/register' element={<RegisterPage />} />
                        <Route path='/register-success' element={<RegisterSuccessPage />} />
                    </Route>
                </Routes>
                <Newsletter />
                <Footer />
            </Container>
            <Outlet />
        </MyProvider>
    )
}

function AdminInterface() {
    return (
        <MyProvider>
            <Container>
                <AdminNavbar />
                <Outlet />
            </Container>
        </MyProvider>
    )
}

function App() {
    return (
        <>
            <Routes>
                <Route element={<AdminInterface />}>
                    <Route path='/admin' element={<AdminLoginPage />} />
                    <Route path='/admin-dashboard' element={<DashBoardPage />} />
                </Route>
            </Routes>
            <Routes>
                <Route element={<UserInterface />}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/product-list' element={<ProductListPage />} />
                    <Route path='/product-info' element={<ProductInfoPage />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='/payment' element={<PaymentPage />} />
                    <Route path='/payment-success' element={<PaymentSuccessPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/register-success' element={<RegisterSuccessPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
