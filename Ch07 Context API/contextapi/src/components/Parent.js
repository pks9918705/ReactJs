import React, { useContext } from 'react'
import { useState } from 'react'
import Children from './Children'
import { textContext } from '../ContextAPI'


export default function Parent() {

    console.log('Parent --Context', textContext);

    const [text, setText] = useState("Initial Text")

    const colorRan= (Math.random()*0xFFFFFF<<0).toString(16)

    console.log('colorRan', colorRan);
    


    return (

        <div>

            <h1 style={{ textAlign: "center", color: `#${colorRan}` }}>Hi this is Parent</h1>
            <input 
            type='text'
            placeholder="Enter text here"
            onChange={(e)=>{setText(e.target.value)}}
            value={text}
            />
            <textContext.Provider value= {text}>
                <Children />
            </textContext.Provider>


        </div>


    )
}
