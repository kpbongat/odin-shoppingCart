import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

function Product({ children, product, cartPage = false }) {
  return (
    <div
      data-testid={"product"}
      className={cartPage ? styles.div2 : styles.div}
    >
      <Link to={product.title} className={styles.link}>
        <img
          className={cartPage ? styles.img2 : styles.img}
          src={product.image}
          alt=""
          width="64px"
          height="auto"
        ></img>
      </Link>

      <div className={styles.desc}>
        <Link to={product.title} className={styles.link}>
          <span className={styles.span}>{product.title}</span>
        </Link>
        <span className={styles.span}>{`$${product.price}`}</span>
      </div>
      {children}
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object,
  initialQuantity: PropTypes.number,
};
export default Product;
