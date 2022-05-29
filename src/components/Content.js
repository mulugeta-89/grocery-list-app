import React, {useState } from 'react'
import ItemList from './ItemList'
const Content = ({items, handleChange, handleClick}) => {
    
    
  return (
    <main>
       {items.length ? (
           
        <ItemList items={items}
        handleChange={handleChange}
        handleClick={handleClick}
        />
       ) : (
           <p style={{marginTop: '2rem'}}>No items found!</p>
       )}
        
       
    </main>
  )
}

export default Content