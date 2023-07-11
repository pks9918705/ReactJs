
import { useState } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import { Provider } from 'react-redux';
import { store } from './redux/store';


function App() {

  const [todos, setTodo] = useState([])



  const onCreateToDo = (text) => {


    setTodo([...todos, { id: todos.length + 1, text, completed: false }])


  }
  const toggleToDO = (index) => {

    const list = [...todos]
    list[index - 1].completed = !list[index - 1].completed
    setTodo(list)
  }
  return (
    <>
      <h1>To Do App</h1>
    {/* provider is here */}
      <Provider store={store}>
        <ToDoForm onCreateToDo={onCreateToDo} />
        <ToDoList todos={todos} toggleToDO={toggleToDO} />

      </Provider>

    </>
  );
}

export default App;
