import React from "react";
import styles from "../styles/Total.module.css";

import {  useValue } from "../itemContext";



function Navbar() {

  
  const {item,total ,resetCart}=useValue()
  // here we are directly calling the function becausee we have created a custom Hook

  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <button onClick={ resetCart}>Reset</button>
    </div>
  );
}

export default Navbar;
