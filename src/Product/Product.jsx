import productIcon from "../assets/help.svg";
import styles from "./Product.module.css";
function Product({ product }) {
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
    </div>
  );
}
export default Product;
