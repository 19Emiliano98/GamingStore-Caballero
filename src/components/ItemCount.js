import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
/* Styles */
import "./ItemDetail/DetailStyles.css"

const ItemCount = ({initial, stock, onAdd}) => {
  
const [cont, setCont] = useState(parseInt(initial))

const decreaseCont = () => setCont(cont - 1);
  
const increaseCont = () => setCont(cont + 1);

useEffect(() => {
  setCont(parseInt(initial))
},[initial])

const [show,setShow]=useState(true)

const switching = () =>{
  onAdd(cont)
  setShow(false)
}

  return (
    <>
      {
        show?
        <div className='counter'>
          <button disabled={cont <= 1} onClick={decreaseCont} className="button-counter">-</button>
          <span>{cont}</span>
          <button disabled={cont >= stock} onClick={increaseCont} className="button-counter">+</button>
          <button disabled={stock <= 0} onClick={() => switching()} className="button-addcart">Finalizar</button>
        </div>
        : <Link to={"/cart/"}><button className="button-addcart">Terminar mi compra</button></Link>
      }
    </>
  )
}

export default ItemCount