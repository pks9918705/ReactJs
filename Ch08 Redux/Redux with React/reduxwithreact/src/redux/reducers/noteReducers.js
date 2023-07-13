

import { ADD_NOTE,DELETE_NOTE } from "../actions/noteActions";

  const initialState = {
  notes: [
    {
        id:0,text:"My first Note",createdOn:new Date()
         
    },
    {
        id:1,text:"My second Note",createdOn:new Date()  
         
    }
  ]
};

export function noteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id:state.notes.length+1,
            text: action.text,
            createdOn:new Date()
          }
        ]
      };
    case DELETE_NOTE:
      console.log("delet is called",action.index)
      console.log(state.notes)
      state.notes.splice(action.index,1)
      return {
        ...state,
        notes:[...state.notes]
      };
    default:
      return state;
  }
}
