import {useState} from 'react'

export default function Input(){

    //using stateHook
    const [name,setName]=useState("")
    const [lastName,setLastName]=useState("")

   
   
    return(
        <>
        <div className="section">
            <Row label="Name"> 
                    <input value={name} onChange={(e)=>setName(e.target.value)} className="input"/>
            </Row >
            <Row label="Last Name">
                    <input value={lastName} onChange={(e)=>setLastName(e.target.value)}className="input"/>
            </Row >
        </div>

        <h2>Hello, {name} {lastName} </h2>
         
        
        </>
        )
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <lable>{label}<br/></lable>
        {props.children}
        <hr />
        </>
    )
}
