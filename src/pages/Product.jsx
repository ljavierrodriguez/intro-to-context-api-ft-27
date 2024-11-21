import React, { useContext } from 'react'
import { ShoppingCartContext } from '../context/ShoppingCart'

const Product = () => {
    const { saludo, cart, removeItem } = useContext(ShoppingCartContext) // Consumer
    return (
        <>
            <div>Product</div>
            <p>{saludo}</p>
            <ul className="list-group">
                {
                    cart.map((c, i) => {
                        return (
                            <li className='list-group-item d-flex justify-content-between'>
                                <span>Product {c.product_id}</span>
                                <span>Total: {c.price * c.quantity}</span>
                                <span><i className="bi bi-trash" onClick={() => removeItem(i)}></i></span>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Product