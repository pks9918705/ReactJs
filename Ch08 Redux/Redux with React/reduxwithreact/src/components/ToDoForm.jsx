import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";

export default function ToDoForm( ) {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    //! here need to understand how things work -- go to end of this page
    e.preventDefault();
    //? below is the async function
    setInputText("");
    console.log("inputText", inputText);
    dispatch(addTodo(inputText));
  };

  return (
    <>
      <input
        placeholder="Enter ToDo Here"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleSubmit}>ADD</button>
    </>
  );
}

//!                             very very important
/*  

Apologies for any confusion caused. You are correct, my previous response was not accurate in explaining the sequence of events. I apologize for the misunderstanding. Let me clarify the order of operations:

The setInputText("") function is called, which updates the state variable inputText to an empty string.

The dispatch(addTodo(inputText)) function is called immediately after setInputText("").

Since """""state updates in React are asynchronous,""""" the value of inputText will not be immediately updated to an empty string. The updated value will be available in the next render cycle.

The addTodo action is dispatched with the current value of inputText, which will still hold the previous value before calling setInputText("").

After the function execution completes, React will schedule a re-render of the component.

During the re-render, the component will reflect the updated state, and the inputText value will be an empty string, as set by the previous state update.

Any subsequent code outside the handleSubmit function will execute after the re-render, with the updated state value.

In summary, the dispatch(addTodo(inputText)) function is called with the previous value of inputText before it's updated by setInputText(""). The updated value will be available in the subsequent re-render of the component.

Again, I apologize for the confusion caused by my previous responses. Thank you for pointing out the discrepancy, and I appreciate your understanding.






 */