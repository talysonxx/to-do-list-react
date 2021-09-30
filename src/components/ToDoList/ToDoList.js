import React from 'react'

export const ToDoList = ({list}) => {
  return (
    <ul>
      {list.map((item, index) => {
        return (
          <li key={index}>{item}</li>
        )
      })}
    </ul>
  )
}
