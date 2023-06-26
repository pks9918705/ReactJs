import { createContext } from 'react'
import { useState } from 'react';
import { useContext } from 'react';

  const itemContext = createContext()
 const totalContext= createContext()

 // function for definig a custom hook so that we need not use useContext() in different files
 export function useValue(){
    const value =useContext(itemContext)
    return value
 }


export default function CustomItemContext({children}) {
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    // here we can create as many number of state as we need
    return (
        <itemContext.Provider value={ {total,item,setItem,setTotal}}>

            {children}

        </itemContext.Provider>
    )
}

export {itemContext}
export {totalContext}
