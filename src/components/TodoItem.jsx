import React from 'react'

const TodoItem = ({ title, completed, handleChange, removeTodo }) => {
  


  return (
    <ul>
    
      <span>  <input type="checkbox" checked={completed} onChange={handleChange} /></span> <label >{ title}</label> 
        <button onClick={removeTodo}>sil</button>
    </ul>
  )
}

export default TodoItem;