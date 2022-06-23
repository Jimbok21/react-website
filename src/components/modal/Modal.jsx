import React, { useState } from 'react'
import './modal.css'
import { data } from '../../assets/projects_data.js'
import ReactDOM from 'react-dom'
import { Hidden } from '@mui/material'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
  overflow: 'hidden'
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
  
}

export default function Modal({ open, children, onClose }) {

  // if (!open) return null;

  // if (open) {
  //   // const list = document.getElementById('portal').classList;
  //   // list.add('active-modal')
  //   document.getElementById('portal').classList.add('active-modal')
  //   // document.body.classList.add('active-modal')
  // } else {
  //   document.body.classList.remove('active-modal')
  // }

  //   return ReactDOM.createPortal(
  //     <>
  //       {open && (
  //         <div className="modal" id='modal'>
  //           <div onClick={onClose} className="overlay"></div>
  //           <div className="modal-content">
  //             <h2>{children}</h2>
  //             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, quibusdam neque. Excepturi ipsam amet ipsum cupiditate quod vel doloribus quibusdam, exercitationem, unde, officia quisquam. Minus amet nisi at voluptatum ratione, ducimus itaque soluta in eaque nemo. Vitae fugit odio, sequi eius at, odit quia aliquam, ex est amet iusto eum quisquam voluptate distinctio esse corrupti? Inventore provident fugiat nemo voluptas possimus dolorum deserunt consectetur libero sunt delectus necessitatibus at, voluptatum ipsa? At consequuntur dolore natus suscipit dolor dicta, ducimus architecto rerum cum id alias dolorem nostrum ea consectetur minus libero, neque voluptates odio! Dolorum aperiam facilis repudiandae placeat suscipit ratione nulla neque possimus ipsam perspiciatis ipsum iste quaerat, alias saepe. Nihil non ab unde rem corrupti soluta cupiditate tempora voluptates fuga facilis, consequatur accusantium, repudiandae quidem minus. Earum necessitatibus fuga minus laudantium officiis dignissimos, sint vel, nesciunt possimus, consectetur eveniet amet pariatur dolore aliquid. Ullam nisi voluptatibus atque sed praesentium voluptatem, doloremque veritatis ipsam iure beatae sunt obcaecati rem. Quibusdam placeat non voluptate dolorem ad voluptas veritatis debitis, at, dignissimos quidem ipsum accusantium quos, dolores maiores explicabo! Vel nesciunt voluptates quia molestiae, perspiciatis ullam praesentium vitae accusamus inventore repellendus nam? Quibusdam earum quidem ullam eaque nobis accusantium repudiandae corrupti maiores itaque aperiam eius tempora unde ipsum doloribus excepturi reiciendis id, suscipit repellat ad omnis sapiente impedit est sed. Sapiente, natus ipsam, delectus aliquid in veritatis tempore nemo doloribus vitae minus at labore numquam nihil voluptates, vero facere sequi perspiciatis rerum. Maxime, officiis ad at perferendis minus explicabo ut nihil nam facere illo hic labore quam non temporibus fuga minima nulla sequi culpa alias quas necessitatibus reiciendis, aperiam quidem rem. Distinctio perspiciatis voluptatum in nisi error, cupiditate quidem deleniti delectus et, eaque consectetur placeat, aliquam atque vero cum alias repudiandae quam magni! Vitae quo velit aliquid. Dolorem omnis quod repudiandae ipsa earum praesentium deleniti, inventore minima fugiat sapiente placeat consequatur beatae necessitatibus consequuntur sunt! Dolor facilis minus error omnis earum eligendi, soluta mollitia vero molestias ipsa exercitationem, natus necessitatibus reiciendis nemo praesentium, hic nisi! Sint, fuga tenetur! Provident iure hic id cumque corporis magnam porro ad minima doloribus expedita possimus eum, tempora laboriosam deserunt nulla quaerat. Ratione, neque nesciunt rem sint porro dolore dolorem iusto, amet sed deserunt facilis fuga architecto, non deleniti veritatis repudiandae sit nostrum odit consequuntur atque in ut laboriosam provident! Animi quae debitis eum ducimus eius? Eaque praesentium reiciendis accusantium ad aperiam sit, cupiditate tempore asperiores! Nulla animi ipsum tempora ut alias non asperiores, excepturi minima, optio doloribus ex, neque aut sint? Sint, sed quo. Delectus, vel dolorem eveniet impedit maiores asperiores at cum odio magni nostrum, numquam harum ex aliquid doloribus aspernatur, rem tempora minus incidunt. Animi quas nisi asperiores fugiat voluptatum! Sit, rem. Commodi esse deleniti ipsum dolorem ex iure minima enim dolores eveniet vitae nesciunt sint ipsa doloribus quos adipisci expedita, hic corporis ullam, in quaerat cum animi molestiae excepturi. Sit id, exercitationem illo est qui repudiandae voluptates necessitatibus iste similique in, tempora vel at magni quae omnis nisi numquam culpa tempore quas nobis cumque quisquam! Dolor voluptas error corporis ipsa ut repellendus fugiat rerum sequi perferendis! Iure quos blanditiis quas voluptatibus quod quam a quisquam nemo doloremque, in dignissimos, reiciendis labore accusantium dolorem assumenda quo magnam. Dolorum excepturi nemo quibusdam tenetur pariatur minima, soluta dolores illo odit ipsam laudantium, labore saepe deleniti repellat itaque neque enim odio et impedit similique repudiandae! Eveniet velit praesentium consequatur magni iusto provident commodi eum quas. Ratione, in pariatur doloribus temporibus omnis deleniti ducimus. Ab dicta omnis animi distinctio at provident recusandae? Magnam rerum officiis placeat nemo laudantium reprehenderit autem aliquid consectetur iste praesentium, officia in, doloremque facere ad minima quaerat eum neque quam unde eligendi repellendus suscipit veniam. Suscipit esse nihil voluptatum vitae odio porro aliquam impedit nulla labore libero molestiae laborum, rerum nesciunt magni ipsa numquam autem nobis, ad eum inventore illum facere aut quaerat? Pariatur at perferendis ea! Voluptate, ratione eos alias magni, tempora, quis accusamus temporibus at sapiente iure autem architecto harum nihil? Veritatis ipsam, quia nulla  </p>
  //             <button className="close-modal" onClick={onClose}>
  //               CLOSE
  //             </button>
  //           </div>
  //         </div>
  //       )}
  //     </>, document.getElementById('portal')
  //   )
  // }
//   return (
//     <section id='modal'>
//       <p>{data}</p>
//       <div>
//         {/* {
//           data.map(({ id, image, title, description, date, status, category, difficulty, pattern }) => {
//             return (
//               <div>
//               <p>{id}</p>
//               <p>{title}</p>
//               </div>
//             )
//           })
//         } */}
//       </div>
//     </section>
//   )
// }
if (!open) return null

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}