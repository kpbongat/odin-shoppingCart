import PropTypes from "prop-types";

import { useState } from "react";
import styles from "./Product.module.css";
function Product({
  product,
  initialQuantity = 0,
  cart,
  setCart,
  inCart = false,
}) {
  const [quantity, setQuantity] = useState(initialQuantity);

  function changeQuantity(newQuantity) {
    setQuantity(newQuantity);
    if (inCart) {
      const cartProduct = { product, quantity: newQuantity };
      setCart({ ...cart, [product.id]: cartProduct });
    }
  }

  function addToCart() {
    const cartProduct = { product, quantity: quantity };
    setCart({ ...cart, [product.id]: cartProduct });
  }
  return (
    <div data-testid={"product"} className={inCart ? styles.div2 : styles.div}>
      <img
        className={inCart ? styles.img2 : styles.img}
        src={product.image}
        alt=""
        width="64px"
        height="auto"
      ></img>

      <div className={styles.desc}>
        <span className={styles.span}>{product.title}</span>
        <span className={styles.span}>{`$${product.price}`}</span>
        <div className={styles.quantity}>
          <button
            className={styles.btn}
            onClick={() => changeQuantity(quantity - 1)}
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
        {inCart ? null : (
          <button className={styles.btn2} onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object,
  initialQuantity: PropTypes.number,
  cart: PropTypes.object,
  setCart: PropTypes.func,
  inCart: PropTypes.bool,
};
export default Product;
