import {useState,useEffect} from 'react'

export default function Input(){

    //using stateHook
    const [name,setName]=useState("")
    const [lastName,setLastName]=useState("")

    //? using useEffect- it is equivalent to didMount and didUpdate
    // useEffect(() => {
    //     document.title=name+" "+lastName
    // })
    //? bwlow will render when the lastName is updated
    // useEffect(() => {
    //     document.title=name+" "+lastName
    // },[lastName])
    

    useEffect(() => {
        let timer=setInterval(() =>{
            console.log('window width',window.innerWidth);
            
        },2000)
        return (clearInterval(timer))
    })



   
   
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
