import React from 'react'
import LineItem from './LineItem'
export default function ItemList({ items, handleChange, handleClick}) {
  return (
    <ul>
           {items.map((item) => (
               <LineItem 
               key={item.id}
                item={item}
                handleChange={handleChange}
                handleClick={handleClick}/>
           ))}
    </ul>
  )
}
