import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";

function Items() {
  return (
    <div className={styles.wrapper}>
      <ItemCard name="Apple" price={500} />
       
       
    </div>
  );
}

export default Items;
