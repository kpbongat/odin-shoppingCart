import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import cartIcon from "../../public/assets/cart-outline.svg";
import PropTypes from "prop-types";
function Nav({ cartCount }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="shop" className={styles.link}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="cart" className={styles.link}>
            <img src={cartIcon} alt="" width="32px" height="auto" />
            <span>{cartCount}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  cartCount: PropTypes.number,
};

export default Nav;
