// import React from 'react'
// import {addToCart} from './redux/action'

// import { useDispatch } from 'react-redux';
// export default function App() {
//   const dispatch = useDispatch()
//   const product = {
//     name:"I phone",
//     type : "mobile",
//     price : 1000,
//     color:"red"
//   }
//   return (
//     <div style={{textAlign:'center'}}>
//        <button onClick={()=>dispatch(addToCart(product))} >Add to Cart</button>

//     </div>
//   )
// }



// ################## part-2 ####################### 


import React from 'react'
import {addToCart} from './redux/action'
import Header from './componets/Header'
import Main from './componets/Main'

import { useDispatch } from 'react-redux';
export default function App() {

  return (
    <div style={{textAlign:'center'}}>
<Header />
<Main />
    </div>
  )
}
