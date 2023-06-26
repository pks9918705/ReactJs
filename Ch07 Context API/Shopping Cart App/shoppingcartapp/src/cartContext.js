

//TODO: Array of items in cart ko store
//TODO: useState for array 
//TODO: Create context

import { createContext } from 'react'
import { useState } from 'react';
import { useContext } from 'react';

//! Creating a Context
const cartContext = createContext()


 
//! Consuming ---> the value is also done here
export function useValue() {
    const value = useContext(itemContext)
    return value
}


export default function CustomCartContext({ children }) {
     // state is created and initialized with empty array
  const [cartItem,setcartItem] =useState([])


  
    // handler for Back 
    const Back = () => {

         
    };

    // Handler to reset the cart 
 const resetCart=()=>{
         
    }
        
    
    return (
            <itemContext.Provider value={{ handleAdd,handleRemove,total, item, setItem, setTotal ,resetCart}}>

                {children}

            </itemContext.Provider>
        )
    }


export { cartContext }
export { totalContext }

 