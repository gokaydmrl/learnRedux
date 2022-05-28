import React from 'react'

const TodoItem = ({ title, checked, completed, onChange, handleChange }) => {
  


  return (
    <ul>
    
      <span>  <input type="checkbox" checked={completed} onChange={handleChange} /></span> <label >{ title}</label> 
        
    </ul>
  )
}

export default TodoItem;