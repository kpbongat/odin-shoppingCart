import { useState } from "react";
import styles from "./CartWorker.module.css";
function CartWorker({
  product,
  cart,
  setCart,
  initialQuantity = 0,
  cartPage = false,
}) {
  const [quantity, setQuantity] = useState(initialQuantity);

  function changeQuantity(newQuantity) {
    setQuantity(newQuantity);
    if (cartPage) {
      const cartProduct = { product, quantity: newQuantity };
      setCart({ ...cart, [product.id]: cartProduct });
    }
  }

  function addToCart() {
    const cartProduct = { product, quantity: quantity };
    setCart({ ...cart, [product.id]: cartProduct });
  }

  function removeFromCart() {
    const { [product.id]: oldProduct, ...newCart } = cart;
    setCart(newCart);
  }
  return (
    <>
      <div className={styles.quantity}>
        <button
          className={styles.btn}
          onClick={() => changeQuantity(quantity - 1 < 0 ? 0 : quantity - 1)}
        >
          -
        </button>
        <span className={styles.span2}>{quantity}</span>
        <button
          className={styles.btn}
          onClick={() => changeQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
      {cartPage ? (
        <button className={styles.btn2} onClick={removeFromCart}>
          Remove
        </button>
      ) : (
        <button className={styles.btn2} onClick={addToCart}>
          Add to Cart
        </button>
      )}
    </>
  );
}
export default CartWorker;
