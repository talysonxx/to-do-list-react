import React from 'react'
import {Card} from '../Card'

export const Modal = (props) => {
  const hideModal = ({target}) => {
    if (target.id === 'modal') props.onHideModal()
  } 

  return (
    <div onClick={hideModal} id="modal" className={`${props.show ? 'modal' : 'hide-modal'}`}>
      <Card className="card-modal">
        {props.children}
      </Card>
    </div>
  )
}
