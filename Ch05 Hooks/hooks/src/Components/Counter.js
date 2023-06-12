
import React, { useState } from 'react'


export default function Counter() {

    let [count,setCount]=useState(0)

    const styleForBtn={

        height:"50px",
        width:"500px"


    }

  return (
    <div>
        <h1>{count}</h1>
      <button style={styleForBtn} onClick={ ()=>setCount(count+=1)}>Inc</button>
      <button style={styleForBtn} onClick={ ()=>setCount(count-=1)}>Dec</button>
    </div>
  )
}
