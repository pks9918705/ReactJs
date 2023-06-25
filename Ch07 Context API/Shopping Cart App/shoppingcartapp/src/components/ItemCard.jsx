import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useContext } from "react";
import { itemContext } from "../itemContext";
import { totalContext } from "../totalContext";

function ItemCard({ name, price }) {

  //consuming context
  const valueItem=useContext(itemContext)
  const valueTotal=useContext(totalContext)

  const {item,setItem}=valueItem
  const {total,setTotal}=valueTotal

  //  console.log("%%%%",item, total )

  const handleAdd = () => {

    setItem(item+1)
    setTotal(total+price)


  };

  const handleRemove = () => {

    if(item>0){
      setItem(item-1)
      setTotal(total-price)
    }
    
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd()}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
