import { useEffect, useState } from "react";
import Product from "../Product/Product";
import styles from "./Shop.module.css";
function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const responseJSON = await response.json();
      setProducts(responseJSON);
    })();
  }, []);
  return (
    <section className={styles.section}>
      {products.map((i) => (
        <Product key={i.id} product={i} />
      ))}
    </section>
  );
}

export default Shop;
