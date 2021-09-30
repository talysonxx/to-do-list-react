import {useState} from 'react'
import {ToDoForm, ToDoList} from './components'
import Item from './globals/Item'
import './App.css'

function App() {
  // states
  const [list, setList] = useState([])

  // actions
  const onAddItem = text => {
    let item = new Item(text)
    setList([...list, item])
  }
  const clearList = () => {
    setList([])
  }
  const onItemDeleted = item => {
    let filteredItems = list.filter(it => it.id !== item.id)
    setList([...filteredItems])
  }
  const onDone = item => {
    let updateListItems = list.map(it => {
      if (it.id === item.id) {
        it.done = !it.done
      }
      return it
    })

    setList(updateListItems)
  } 

  return (
    <>
      <h1>To do list</h1>

      <ToDoForm list={list} clearList={clearList} onAddItem={onAddItem}/>

      <ToDoList onDone={onDone} onItemDeleted={onItemDeleted} list={list}/>
    </>
  )
}

export default App
