
//!                                        Action Module

//Action Constants
export const ADD_NOTE = "Add Note"
export const DELETE_NOTE = "Delete Note"


//Action Creators-these the objects
export const addNote = (text) => ({
    text, type: ADD_NOTE
})
export const deleteNote = (index) => (
    {
        index, type: DELETE_NOTE
    }
)

