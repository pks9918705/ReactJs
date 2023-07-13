import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deleteNote} from "../redux/actions/noteActions"


export default function NoteList() {
  const notes=useSelector((state)=>state.noteReducer.notes)
  //const todos=store.getState().todos
  const dispatch=useDispatch()

  return (
    <ul>
      {notes.map((note,i ) => (
         
        <li key={i}>
          
          <p>{note.text} </p>
          <p>Created On: {note.createdOn.toLocaleDateString()}</p>


        <button onClick={()=>dispatch(deleteNote(i))}>Delete</button>

        </li>
       
        
        
      ))}
    </ul>
  )
}
