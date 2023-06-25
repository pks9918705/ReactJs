import { createContext } from 'react'
import { useState } from 'react';

  const itemContext = createContext()
 const totalContext= createContext()


export default function CustomItemContext({children}) {
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    return (
        <itemContext.Provider value={ {total,item,setItem,setTotal}}>

            {children}

        </itemContext.Provider>
    )
}

export {itemContext}
export {totalContext}