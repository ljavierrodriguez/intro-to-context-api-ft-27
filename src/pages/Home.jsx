import React, { useContext, useState } from 'react'
import { ShoppingCartContext } from '../context/ShoppingCart'
import { GlobalUserContext } from '../context/GlobalUser'

const Home = () => {

    const [noticias, setNoticias] = useState(null)
    
    const { saludo, addItem } = useContext(ShoppingCartContext) // Consumer
    const { login, logout } = useContext(GlobalUserContext)
    return (
        <>
            <div>Home</div>
            <div>{saludo}</div>
            <button onClick={login}>Login</button>
            <button onClick={() => addItem({ product_id: 1, quantity: 2, price: 300 })}>Add Item</button>
        </>
    )
}

export default Home