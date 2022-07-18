import React from 'react'
import { Link } from 'react-router-dom'
/* Style */
import "./ItemsStyles.css"

const Item = ({item}) => {  

return (
    <div className="Catalog">
        <img src={item.img} alt={item.name} />
        <div>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <Link to={`/Item/${item.id}`}>Ver mas</Link>
        </div>
    </div>
)
}

export default Item