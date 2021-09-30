import {useState} from 'react'
import {ToDoForm, ToDoList} from './components'
import './App.css'

function App() {
  // states
  const [list, setList] = useState([])

  // actions
  // const removeThis = index => {
  //   let newArr = [...list]
  //   newArr.splice(index, 1)
  //   setList([...newArr])
  // }

  const onAddItem = item => {
    setList([...list, item])
  }
  const clearList = () => {
    setList([])
  }

  return (
    <main>
      <ToDoForm list={list} clearList={clearList} onAddItem={onAddItem}/>

      <ToDoList list={list}/>
    </main>
  )
}

export default App
