import React,{ useContext } from 'react'
import {cartContext} from '../Context/CartContext'

import { BiCartAlt } from 'react-icons/bi'

const CartWidget = () => {

    const {qtyProducts} = useContext(cartContext)

    return (
        <>
            {
                !qtyProducts == 0 
                ?
                <>
                    <BiCartAlt />
                    <p>{ qtyProducts }</p>
                </>
                :
                <></>
            }
        </>
    )
}

export default CartWidget