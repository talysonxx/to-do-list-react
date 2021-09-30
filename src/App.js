import {useState} from 'react'
import {ToDoForm, ToDoList} from './components'
import Item from './globals/Item'
import './App.css'

function App() {
  // states
  const [list, setList] = useState([])

  // actions
  const onAddItem = item => {
    let text = new Item(item)
    setList([...list, text])
  }
  const clearList = () => {
    setList([])
  }
  const onItemDeleted = item => {
    let filteredItems = list.filter(it => it.id !== item.id)
    setList([...filteredItems])
  }

  return (
    <main>
      <ToDoForm list={list} clearList={clearList} onAddItem={onAddItem}/>

      <ToDoList onItemDeleted={onItemDeleted} list={list}/>
    </main>
  )
}

export default App
