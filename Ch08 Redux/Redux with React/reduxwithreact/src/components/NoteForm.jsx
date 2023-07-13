import React, { useState } from 'react'
 
import { useDispatch } from 'react-redux'
import { addNote } from '../redux/actions/noteActions';

export default function NoteForm() {

  const [inputNote,setInputNote] = useState("")
    const dispatch=useDispatch()

    const handleSubmit = (e) => {
      //! here need to understand how things work -- go to end of this page
      e.preventDefault();
      //? below is the async function
      setInputNote("");
      dispatch(addNote(inputNote));
    };

  return (
    <>
    
    <textarea placeholder='Enter the note here'
    value={inputNote}
    onChange={(e)=>setInputNote(e.target.value)}/>
    <button onClick={handleSubmit} >ADD YOUR NOTE</button>

     </>
  )
}
