import { useOutletContext } from "react-router-dom";
import Product from "../Product/Product";
import styles from "./Cart.module.css";
import productStyles from "../Product/ProductCart.module.css";
import CartWorker from "../CartWorker/CartWorker";
function Cart() {
  const { cart, setCart } = useOutletContext();
  function clearCart() {
    setCart({});
  }
  return (
    <section className={styles.section}>
      {Object.keys(cart).map((i) => (
        <Product
          key={cart[i].product.id}
          product={cart[i].product}
          styles={productStyles}
        >
          <CartWorker
            product={cart[i].product}
            cart={cart}
            setCart={setCart}
            initialQuantity={cart[i].quantity}
            cartPage={true}
          />
        </Product>
      ))}
      <div className={styles.div}>
        Subtotal:
        {`$${
          Math.round(
            Object.keys(cart).reduce(
              (subtotal, i) =>
                subtotal + cart[i].product.price * cart[i].quantity,
              0
            ) * 100
          ) / 100
        }`}
        <button className={styles.btn} onClick={clearCart}>
          Checkout
        </button>
      </div>
    </section>
  );
}

export default Cart;
