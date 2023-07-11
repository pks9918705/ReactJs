import React from "react";
import {   useSelector } from "react-redux/es/hooks/useSelector";

function ToDoList({  toggleToDO }) {

  const todos=useSelector((state)=>state.todos)
  //const todos=store.getState().todos

  return (
    <ul>
      {todos.map((todo,i ) => (
        <>
        <li key={i}>{todo.text}    <span>Status: {`${todo.completed}` }</span>
        <button onClick={()=>toggleToDO((todo.id))}>Toggle</button>
        </li>
       
        </>
        
      ))}
    </ul>
  );
}

export default ToDoList;
