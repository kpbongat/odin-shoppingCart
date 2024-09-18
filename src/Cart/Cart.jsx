import { useOutletContext } from "react-router-dom";
import Product from "../Product/Product";
import styles from "./Cart.module.css";
function Cart() {
  const [cart, setCart] = useOutletContext();
  return (
    <section className={styles.section}>
      {Object.keys(cart).map((i) => (
        <Product
          key={cart[i].id}
          product={cart[i].product}
          initialQuantity={cart[i].quantity}
          cart={cart}
          setCart={setCart}
          inCart={true}
        />
      ))}
    </section>
  );
}

export default Cart;
