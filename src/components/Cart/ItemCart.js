import React, { useContext } from 'react'
import { cartContext } from '../Context/CartContext';



const ItemCart = ({product}) => {

    const { removeProduct } = useContext(cartContext)

  return (
    <div>
        <div key={product.id}>
            <h2>{product.name}</h2>
            <h3>{product.description}</h3>
            <span>$ { product.price }</span>
            <h3>Subtotal: {product.qty * product.price}</h3>
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart