import { createContext } from 'react'
import { useState } from 'react';
import { useContext } from 'react';

import data from "../src/data/itemData"
//! )))))))))))(((((((((((((((((())))))))))))))))))

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
    // state for cart items array
    const [cartItem, setCartItem] = useState([])
    // here we can create as many number of state as we need


    // defineing handler here
    const handleAdd = (id) => {

        console.log("just clicked on Add buttoon")

        // find the item from the itemData 
        // add it in the total
        // add to the cartItem array 
        const existingItem = cartItem.find(obj => obj.id === id)

        //? finding the item in the cartItem array

        if (existingItem) {
            existingItem.quantity += 1;
            setTotal((prev)=>prev+existingItem.price)
        } else {
            const itemToAdd = data.find((item) => item.id === id);

            if (itemToAdd) {
                const newItem = {
                    id: itemToAdd.id,
                    name: itemToAdd.name,
                    price: itemToAdd.price,
                    quantity: 1
                };

                setCartItem((prevItems) => [...prevItems, newItem]);
                setTotal((prevTotal) => prevTotal + itemToAdd.price);
            }
        }

        setItem((prevItem) => prevItem + 1);
        


    };

    const handleRemove = (id) => {

        // find the item from the dataList
        // remove from the total value
        // delte from the cartItem array
        // if (item > 0) {
        //     setItem(item - 1)
        //     setTotal(total - price)
        // }

    }

    const resetCart = () => {
        setItem(0)
        setTotal(0)
        setCartItem([])
    }

    return (
        <itemContext.Provider value={{ handleAdd, handleRemove, total, item, setItem, setTotal, resetCart, cartItem }}>

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