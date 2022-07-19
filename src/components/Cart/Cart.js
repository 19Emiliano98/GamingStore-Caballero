import React, { useContext, useState } from 'react';
import { cartContext } from '../Context/CartContext';
import {Link} from 'react-router-dom';

import "./CartStyles.css"

const Cart = () => {

    const { products, qtyProducts, removeProduct, totalPrice } = useContext(cartContext)
    console.log(products)

  return (
    <div className='container'>
        <h1>Carrito de compras</h1>
        {
          qtyProducts ===  0
          ? <Link to='/'>No hay productos, ve a comprar aca</Link>
          : 
          <>
            {products.map(product => 
              <div key={product.id}>
                <h2>{product.name}</h2>
                <h3>{product.description}</h3>
                <span>$ { product.price }</span>
                <h3>Subtotal: {product.qty * product.price}</h3>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
              </div>
            )}
          </>
        }
    </div>
  )
}

export default Cart