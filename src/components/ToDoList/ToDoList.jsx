import React from 'react'

export const ToDoList = ({list, onItemDeleted, onDone}) => {
  const DoneImg = ({done}) => {
    if (done) {
      return <img alt="Done" src="./assets/on.svg"/>
    } else {
      return <img alt="Undone" src="./assets/off.svg"/>
    }
  }

  return (
    <ul>
      {list.map(item => {
        return (
          <div className="note" key={item.id}>
            <li className={item.done ? 'done' : 'undone'}>{item.text}</li>
            <button onClick={() => onDone(item)}><DoneImg done={item.done}/></button>
            <button onClick={() => onItemDeleted(item)}>Remove this item</button>
          </div>
        )
      })}
    </ul>
  )
}
