import React, { useContext } from 'react'
 //consuming the context here in grandchildren
 import { textContext } from '../ContextAPI' 
export default function GrandChildren() {

   const text=useContext(textContext)
   console.log('text value: ',text);
   

  return (
    <div>
      <h3>This is GrandChildren </h3>
      <p>{text}</p>
    </div>
  )
}
