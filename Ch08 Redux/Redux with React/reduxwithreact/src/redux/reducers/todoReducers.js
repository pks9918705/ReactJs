import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

export const initialState = {
  todos: [
    {
        id:0,text:"My first Todo",completed:false
         
    },
    {
        id:1,text:"My second Todo",completed:false
         
    }
  ]
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id:state.todos.length+1,
            text: action.text,
            completed: false
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };
    default:
      return state;
  }
}
