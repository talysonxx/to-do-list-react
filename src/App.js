import {useState, useEffect} from 'react'
import {ToDoForm, ToDoList} from './components'
import Item from './globals/Item'
import './App.css'

const SAVED_LIST = 'savedList'

function App() {
  // states
  const [list, setList] = useState([])

  // firstLoaded
  useEffect(() => {
    // localStorage always write as a string, so parse to JSON
    let savedList = localStorage.getItem(SAVED_LIST)
    // console.log(savedList)

    if (savedList) setList(JSON.parse(savedList))
  }, [])

  // always load
  useEffect(() => {
    localStorage.setItem(SAVED_LIST, JSON.stringify(list))
  }, [list])

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
