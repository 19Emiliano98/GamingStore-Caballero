import React, { useContext } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { cartContext } from '../Context/CartContext';
import {Link} from 'react-router-dom';
import ItemCart from './ItemCart';

import "./CartStyles.css"

const Cart = () => {

    const { products, qtyProducts, totalPrice } = useContext(cartContext)
    
    const order = {
      buyer: {
        name: 'Pablo',
        email: 'Pablo@gmail.com',
        phone: '1234',
        adress: 'asd',
      },
      items: products.map(product => ({id: product.id, title: product.name, price: product.price, quantity: product.quantity})),
      total: totalPrice(),
    }

    const handleClick = () => {
      const ordersCollection = collection( getFirestore(), 'orders' )
      addDoc( ordersCollection, order )
      .then( ( {id} ) => console.log(id) )
    }

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
            <h4><button onClick={handleClick}>Emitir Compra</button></h4>
          </>
        }
    </div>
  )
}

export default Cart