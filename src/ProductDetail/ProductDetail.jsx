import { useOutletContext, useParams } from "react-router-dom";
import Product from "../Product/Product";
import CartWorker from "../CartWorker/CartWorker";
import styles from "./ProductDetail.module.css";
import productStyles from "../Product/ProductDetail.module.css";

function ProductDetail() {
  const { cart, setCart, products } = useOutletContext();
  const { name } = useParams();

  const product = products.find((i) => i.title === name);
  return (
    <Product product={product} styles={productStyles}>
      <CartWorker product={product} cart={cart} setCart={setCart} />
      <span className={styles.span}>Category: {product.category}</span>
      <span>{product.description}</span>
    </Product>
  );
}

export default ProductDetail;
