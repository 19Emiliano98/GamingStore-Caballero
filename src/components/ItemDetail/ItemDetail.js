
import React,{ useContext } from 'react'
import ItemCount from '../ItemCount.js'
import { cartContext } from '../Context/CartContext'
/* Styles */
import "./DetailStyles.css"

const ItemDetail = ({data}) => {
    
    const {addProduct} = useContext(cartContext)

    const onAdd = (cont) => {
        addProduct({...data, qty: cont})
    }

return (
    <div className='details'>
        <img src={data.img} alt={data.description}/>
        <div className='details-item'>
            <h2>{data.description}</h2>
            <h3>$ {data.price}</h3>
            <ItemCount stock={data.stock} initial={1} onAdd={onAdd}/>
        </div>
    </div>
    )   
}

export default ItemDetail