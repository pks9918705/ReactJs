import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from "../data/itemData"

function Items() {
  // console.log("***",data)
  const itemData=data

  return (
    <div className={styles.wrapper}>
      {itemData.map((item)=>(
      <ItemCard 
      key={item.id}
      id={item.id}
      name={item.name} 
      price={item.price} />))}
      
       
       
    </div>
  );
}

export default Items;
