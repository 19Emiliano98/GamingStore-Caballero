import React, { useContext } from 'react';
import { cartContext } from '../Context/CartContext';
import {Link} from 'react-router-dom';
import ItemCart from './ItemCart';

import "./CartStyles.css"

const Cart = () => {

    const { products, qtyProducts, totalPrice } = useContext(cartContext)
    console.log(products)

  return (
    <div className='container'>
        <h1>Carrito de compras</h1>
        {
          qtyProducts ===  0
          ? <Link to='/'>No hay productos, ve a comprar aca</Link>
          : 
          <>
            {products.map(product => <ItemCart key={product.id} product={product} />)}
            <p>total: $ {totalPrice()}</p>
          </>
        }
    </div>
  )
}

export default Cart