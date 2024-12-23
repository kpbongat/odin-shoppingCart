import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Product({ children, product, styles }) {
  return (
    <div data-testid={"product"} className={styles.div}>
      <Link to={`/shop/${product.title}`} className={styles.link}>
        <img
          className={styles.img}
          src={product.image}
          alt=""
          width="64px"
          height="auto"
        ></img>
      </Link>

      <div className={styles.desc}>
        <Link to={`/shop/${product.title}`} className={styles.link}>
          <span className={styles.span}>{product.title}</span>
        </Link>
        <span className={styles.span}>{`$${product.price}`}</span>
        {children}
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object,
  initialQuantity: PropTypes.number,
};
export default Product;
