import React from 'react'
import {Card} from '../Card'
import {ListItem} from '../ListItem/ListItem'

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
          <Card className="card" key={item.id}>
            <li className={item.done ? 'done' : 'undone'}>{item.text}</li>
            <div className="div-btn">
              <button className="btn-image" onClick={() => onDone(item)}><DoneImg done={item.done}/></button>
              <button className="btn-image" onClick={() => onItemDeleted(item)}><img alt="Delet" src="./assets/delet.svg"/></button>
            </div>
          </Card>
        )
      })}
      {/* {list.map(item => <ListItem item={item} onDone={onDone} onItemDeleted={onItemDeleted}/>)} */}
    </ul>
  )
}
