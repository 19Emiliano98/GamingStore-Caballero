import React from 'react'
import Item from './Item'
/* Style */
import "./ItemsStyles.css"

const ItemList = ({items}) => {
    return (
    <>
        <div className='CatalogGrid'>
            {items.map((item) => (
                <Item key={item.id} item={item}/>
            ))}
        </div>
    </>
    )
}

export default ItemList