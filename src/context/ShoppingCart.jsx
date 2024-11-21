import React, { createContext, useState } from 'react'

export const ShoppingCartContext = createContext(null)

// Provider
// Consumer

const ShoppingCart = ({ children }) => {

    const [cart, setCart] = useState([]) // { product_id: 1, quantity: 1, price: 100 }

    const addItem = item => {
        setCart((cart) => (cart.concat(item)))
    }

    const removeItem = pos => {
        setCart((cart) => (cart.filter((item, index) => pos !== index )))
    }

    return (
        <ShoppingCartContext.Provider value={{ saludo: 'Hola', cart, addItem, removeItem }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCart