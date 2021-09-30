import React from 'react'

export const ToDoList = ({list, onItemDeleted}) => {
  return (
    <ul>
      {list.map(item => {
        return (
          <div key={item.id}>
            <li>{item.text}</li>
            <button onClick={() => onItemDeleted(item)}>Remove this item</button>
          </div>
        )
      })}
    </ul>
  )
}
