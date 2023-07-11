import React, { useState } from "react";

export default function ToDoForm(props) {
    const [inputText,setInputText]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log(e)
       props.onCreateToDo(inputText)
        setInputText("")
    }

  return (
    <>
      <input placeholder="Enter ToDo Here"
      value={inputText}
      onChange={(e)=>setInputText(e.target.value)}

      />
      <button onClick={handleSubmit} >ADD</button>
    </>
  );
}
