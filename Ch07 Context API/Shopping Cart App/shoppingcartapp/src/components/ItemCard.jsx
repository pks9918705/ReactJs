import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useValue } from "../itemContext";
// import { useContext } from "react";
// import { itemContext } from "../itemContext";

function ItemCard({ name, price }) {


const { handleAdd, handleRemove } = useValue();

  //! we move these handler to context.js
  // const handleAdd = () => {

  //   setItem(item+1)
  //   setTotal(total+price)

  // };

  // const handleRemove = () => {

  //   if(item>0){
  //     setItem(item-1)
  //     setTotal(total-price)
  //   }

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd(price)}>
          Add
        </button>
        <button
          className={styles.itemButton}
          onClick={() => handleRemove(price)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
