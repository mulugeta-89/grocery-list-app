import React from 'react'
import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react'
export default function AddItem({newItem, setNewItem, handleSubmit}) {
    const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
            <input 
            id='addItem'
            ref={inputRef}
            autoFocus
            type='text'
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}/>
        
        <button type='submit' aria-label='Add Item'
            onClick={() => inputRef.current.focus()} 
            >
            <FaPlus />
        </button>
    </form>
  )
}
