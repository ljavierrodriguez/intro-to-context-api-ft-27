import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../context/ShoppingCart'
import { GlobalUserContext } from '../context/GlobalUser'

const Menu = () => {
    const { cart } = useContext(ShoppingCartContext)
    const { user } = useContext(GlobalUserContext)
    return (
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/products">Products</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/"><i className="bi bi-basket2"></i>({cart.length})</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/">{user?.username}</Link>
            </li>
        </ul>
    )
}

export default Menu