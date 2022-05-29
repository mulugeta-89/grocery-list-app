import React from 'react'

const Footer = ({items, length}) => {
    
  return (
    <footer>
        <h3>{items.length === 1  ? `${items.length} thing left`:   `${items.length} things left` }</h3>
    </footer>
  )
}

export default Footer