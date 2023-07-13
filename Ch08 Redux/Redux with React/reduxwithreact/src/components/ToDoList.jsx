import React from "react";
import { useDispatch } from "react-redux";
import {   useSelector } from "react-redux/es/hooks/useSelector";
import { toggleTodo } from "../redux/actions/todoActions";

function ToDoList({  toggleToDO }) {

  const todos=useSelector((state)=>state.todoReducer.todos)
  //const todos=store.getState().todos
  const dispatch=useDispatch()

  return (
    <ul>
      {todos.map((todo,i ) => (
        <>
        <li key={i}>{todo.text}    <span>Status: {`${todo.completed}` }</span>
        <button onClick={()=>dispatch(toggleTodo(i))}>Toggle</button>
        </li>
       
        </>
        
      ))}
    </ul>
  );
}

export default ToDoList;
