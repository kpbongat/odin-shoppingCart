import { useOutletContext } from "react-router-dom";
import Product from "../Product/Product";
import styles from "./Cart.module.css";
function Cart() {
  const [cart, setCart] = useOutletContext();
  function clearCart() {
    setCart({});
  }
  return (
    <section className={styles.section}>
      {Object.keys(cart).map((i) => (
        <Product
          key={cart[i].product.id}
          product={cart[i].product}
          initialQuantity={cart[i].quantity}
          cart={cart}
          setCart={setCart}
          inCart={true}
        />
      ))}
      <div>
        Subtotal:
        {`$${Object.keys(cart).reduce(
          (subtotal, i) => subtotal + cart[i].product.price * cart[i].quantity,
          0
        )}`}
      </div>
      <button className={styles.btn} onClick={clearCart}>
        Checkout
      </button>
    </section>
  );
}

export default Cart;
