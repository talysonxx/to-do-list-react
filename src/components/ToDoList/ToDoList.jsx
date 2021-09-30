import React from 'react'

export const ToDoList = ({list, removeThisItem}) => {
  return (
    <ul>
      {list.map((item, index) => {
        return (
          <div key={index}>
            <li>{item}</li>
            <button onClick={() => removeThisItem(index)}>Remove this item</button>
          </div>
        )
      })}
    </ul>
  )
}
