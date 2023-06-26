import React, { useState } from 'react'
import { useValue } from '../itemContext'
 

export default function Cart() {

  const {cartItem,total,resetCart}= useValue()
  const items__IN__cart=cartItem
  console.log("items__IN__cart", items__IN__cart)
 
  return (
    <div style={{textAlign:"center"}}>

   <h2>Your Cart</h2>
      <div className="top" style={{display:"flex", justifyContent:"space-between"}} >
        <button>Back</button>
        <button onClick={resetCart}>Clear</button>
      </div>


      <div className="main-cart-list">

<ul>
{items__IN__cart.map((item)=>(
<li style={{display:"flex",justifyContent:"space-between"}} >
  <p>{item.name}</p>
  <span>{item.price}</span>
</li>
)) }
</ul>
       



      </div>

      <div className="footer" style={{color:"orange"}}>

        <h3>Total :{total} </h3>
      </div>

       

    </div>
  )
}
