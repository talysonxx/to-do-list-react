import {Fragment} from 'react'
import {useState, useEffect} from 'react'
import {ToDoForm, ToDoList, Modal} from './components'
import Item from './globals/Item'
import './ToDo.css'

const SAVED_LIST = 'savedList'

function ToDo() {
  // states
  const [list, setList] = useState([])
  const [showModal, setShowModal] = useState(false)

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
    setShowModal(false)
  }
  const clearList = () => {
    setList([])
    onHideModal()
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
  const onHideModal = () => {
    setShowModal(false)
  }

  return (
    <Fragment>
      <header>
        <h1>To do list</h1>
        <button className="button-item" onClick={() => setShowModal(true)}>Add item</button>
      </header>

      <ToDoList onDone={onDone} onItemDeleted={onItemDeleted} list={list}/>

      <Modal show={showModal} onHideModal={onHideModal}>
        <ToDoForm list={list} clearList={clearList} onAddItem={onAddItem}/>
      </Modal>
    </Fragment>
  )
}

export default ToDo
