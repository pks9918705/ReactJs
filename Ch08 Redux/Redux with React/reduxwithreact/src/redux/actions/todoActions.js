
//!                                        Action Module

//Action Constants
export const ADD_TODO = "Add ToDo"
export const TOGGLE_TODO = "Toggle TODO"


//Action Creators-these the objects
export const addTodo = (text) => ({
    text, type: ADD_TODO
})
export const toggleTodo = (index) => (
    {
        index, type: TOGGLE_TODO
    }
)


