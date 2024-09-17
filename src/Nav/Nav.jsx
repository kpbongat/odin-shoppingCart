import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
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
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
