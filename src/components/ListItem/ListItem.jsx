// import React from 'react'
// import {Card} from '../Card'

// export const ListItem = ({list, onItemDeleted, onDone}) => {
//   const DoneImg = ({done}) => {
//     if (done) {
//       return <img alt="Done" src="./assets/on.svg"/>
//     } else {
//       return <img alt="Undone" src="./assets/off.svg"/>
//     }
//   }

//   return (
//     <ul>
//       {list.map(item => {
//         return (
//             <Card key={}>
//               <li className={item.done ? 'done' : 'undone'}>{item.text}</li>
//               <div className="div-btn">
//                 <button className="btn-image" onClick={() => onDone(item)}><DoneImg done={item.done}/></button>
//                 <button className="btn-image" onClick={() => onItemDeleted(item)}><img alt="Delet" src="./assets/delet.svg"/></button>
//               </div>
//             </Card>
//         )
//       })}
//     </ul>
//   )
// }
