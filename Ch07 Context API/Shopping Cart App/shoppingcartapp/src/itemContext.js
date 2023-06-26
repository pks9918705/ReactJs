import { createContext } from 'react'
import { useState } from 'react';
import { useContext } from 'react';

//! Creating a Context
const itemContext = createContext()
const totalContext = createContext()

// function for definig a custom hook so that we need not use useContext() in different files
//! Consuming ---> the value is also done here
export function useValue() {
    const value = useContext(itemContext)
    return value
}


export default function CustomItemContext({ children }) {
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    // here we can create as many number of state as we need


    // defineing handler here
    const handleAdd = (price) => {

        setItem(item + 1)
        setTotal(total + price)


    };

    const handleRemove = (price) => {

        if (item > 0) {
            setItem(item - 1)
            setTotal(total - price)
        }
    }

        return (
            <itemContext.Provider value={{ handleAdd,handleRemove,total, item, setItem, setTotal }}>

                {children}

            </itemContext.Provider>
        )
    }


export { itemContext }
export { totalContext }

// *****************
// Question: Why handlers are moved to Context.js 
// By organizing the handlers in the context file, 
// ->it promotes code reusability, 
// ->simplifies component implementation, 
// ->ensures consistent access to state and handlers across different components that use the context.