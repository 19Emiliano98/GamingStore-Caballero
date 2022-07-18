import React, { useContext } from 'react';
import { cartContext } from '../Context/CartContext';
import {Link} from 'react-router-dom';

import "./CartStyles.css"

const Cart = () => {

    const { products, qtyProducts } = useContext(cartContext)

    console.log(qtyProducts)

    console.log(products)
  return (
    <div className='container'>
        <h1>Carrito de compras</h1>
        
        {
            qtyProducts ===  0
            ? <Link to='/'>No hay productos, ve a comprar aca</Link>
            : <div>{products.map(product => <h2 key={product.id}>{product.name}</h2>)}</div>
        }

    </div>
  )
}

export default Cart