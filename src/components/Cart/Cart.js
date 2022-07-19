import React, { useContext, useEffect } from 'react';
import { cartContext } from '../Context/CartContext';
import {Link} from 'react-router-dom';

import "./CartStyles.css"

const Cart = () => {

    const { products, qtyProducts } = useContext(cartContext)
    /* const [suma, setSuma] = useState(0); */
    console.log(products)
    

  return (
    <div className='container'>
        <h1>Carrito de compras</h1>
        {
          qtyProducts ===  0
          ? <Link to='/'>No hay productos, ve a comprar aca</Link>
          : 
          <div>
            {products.map(product => 
              <div key={product.id}>
                <h2>{product.name}</h2>
                <h3>{product.description}</h3>
                <span>$ { product.price }</span>
              </div>
            )}
          </div>
        }
    </div>
  )
}

export default Cart