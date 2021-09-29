import {useState} from 'react'
import './App.css'

function App() {
  // states
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  // actions
  const handleChange = ({target}) => {
    setInput(target.value)
  }
  const addItem = (event) => {
    event.preventDefault()
    if (checkEmptField()) return null

    setList([...list, input])

    clearInput()
  }
  const removeItems = () => {
    if (checkEmptList()) return null

    let resp = prompt('Are you sure? (Type anything and press OK)')
    if (resp) {
      clearList()
      clearInput()
    }
  }

  // checkers
  const clearInput = () => {
    setInput('')
  }
  const clearList = () => {
    setList([])
  }
  const checkEmptField = () => {
    if (!input) return true
  }
  const checkEmptList = () => {
    if (list.length === 0) return true
  }

  return (
    <main>
      <h1>To Do</h1>

      <div>
        <input type="text" value={input} onChange={handleChange}/>
      </div>

      <button onClick={addItem}>Add</button>
      <button onClick={removeItems}>Clear</button>

      <div>
        <ul>
          {list.map((item, index) => {
            return (<li key={index}>{item}</li>)
          })}
        </ul>
      </div>
    </main>
  )
}

export default App
