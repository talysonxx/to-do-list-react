import React, {useState} from 'react'

export const ToDoForm = (props) => {
  const [input, setInput] = useState('')

  // actions
  const handleChange = ({target}) => {
    setInput(target.value)
  }
  const addItem = (event) => {
    event.preventDefault()

    if(checkEmptField()) return null

    props.onAddItem(input)
    clearInput()
  }
  const checkList = () => {
    if (props.list.length === 0) return null

    let resp = prompt('Are you sure? (Type anything and press OK)')
    if (resp) {
      props.setList([])
    }
  }

  // checkers
  const checkEmptField = () => {
    if (!input) return true
  }
  const clearInput = () => {
    setInput('')
  }

  return (
    <form>
        <input type="text" value={input} onChange={handleChange}/>

        <button onClick={addItem}>Add item</button>
        <button onClick={checkList}>Clear list</button>
    </form>
  )
}