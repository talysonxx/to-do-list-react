import React, {useState} from 'react'

export const ToDoForm = (props) => {
  // states
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
  const checkList = (event) => {
    event.preventDefault()

    if (props.list.length === 0) return null

    let resp = prompt('Are you sure? (Type anything and press OK)')
    if (resp) {
      props.clearList()
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
        <input placeholder="Type something..." type="text" value={input} onChange={handleChange}/>

        <div>
          <button className="button-input button-add" onClick={addItem}>Add item</button>
          <button className="button-input button-removeAll" onClick={checkList}>Clear list</button>
        </div>
    </form>
  )
}
