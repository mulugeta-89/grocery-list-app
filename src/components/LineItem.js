import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'
export default function LineItem({ item, handleChange, handleClick}) {
  return (
    <li key={item.id} className='item'>
                   <input 
                       type='checkbox'
                       onChange={() => handleChange(item.id)}
                       checked={item.checked}
                       />
                   <label
                       style={item.checked ? {textDecoration:'line-through'} : null}
                       onDoubleClick={() => handleChange(item.id)}
                       >{item.item}</label>
                   <FaTrashAlt role='button' tabIndex='0' onClick={() => {
                       handleClick(item.id)
                   }}/>
               </li>
  )
}
