
import React,{ useContext } from 'react'
import ItemCount from '../ItemCount.js'
import { cartContext } from '../Context/CartContext'
/* Styles */
import "./DetailStyles.css"

const ItemDetail = ({product}) => {
    
    const {addProduct} = useContext(cartContext)

    const onAdd = (cont) => {
        addProduct({...product, qty: cont})
    }

return (
    <div className='details'>
        <img src={product.img} alt={product.description}/>
        <div className='details-item'>
            <h2>{product.description}</h2>
            <h3>$ {product.price}</h3>
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
        </div>
    </div>
    )   
}

export default ItemDetail