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
  const removeThisItem = position => {
    let newArr = [...list]
    // from position 'position' remove '1' item(s)
    newArr.splice(position, 1)
    setList([...newArr])
  }

  return (
    <main>
      <ToDoForm list={list} clearList={clearList} onAddItem={onAddItem}/>

      <ToDoList removeThisItem={removeThisItem} list={list}/>
    </main>
  )
}

export default App
