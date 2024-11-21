import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ShoppingCart from './context/ShoppingCart'
import Product from './pages/Product'
import Menu from './components/Menu'
import GlobalUser from './context/GlobalUser'
import GlobalContextProvider from './context/GlobalContextProvider'

const App = () => {
    return (
        <GlobalContextProvider>
            <GlobalUser>
                <ShoppingCart>
                    <BrowserRouter>
                        <Menu />
                        <Routes>
                            <Route path='/products' element={<Product />} />
                            <Route path='/' element={<Home />} />
                        </Routes>
                    </BrowserRouter>
                </ShoppingCart>
            </GlobalUser>
        </GlobalContextProvider>
    )
}

export default App