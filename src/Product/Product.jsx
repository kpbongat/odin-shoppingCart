import { useState } from "react";
import productIcon from "../assets/help.svg";
import styles from "./Product.module.css";
function Product({ product }) {
  const [quantity, setQuantity] = useState(0);

  function subQuantity() {
    setQuantity(quantity - 1);
  }
  function addQuantity() {
    setQuantity(quantity + 1);
  }
  return (
    <div className={styles.div}>
      <img
        className={styles.img}
        src={productIcon}
        alt=""
        width="64px"
        height="auto"
      ></img>
      <span>{product.title}</span>
      <div>
        <button className={styles.btn} onClick={subQuantity}>
          -
        </button>
        <span className={styles.span}>{quantity}</span>
        <button className={styles.btn} onClick={addQuantity}>
          +
        </button>
      </div>
    </div>
  );
}
export default Product;
