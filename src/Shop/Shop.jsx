import { useEffect, useState } from "react";
import Product from "../Product/Product";
import styles from "./Shop.module.css";
import { useOutletContext } from "react-router-dom";
import CategoryFieldset from "../CategoryFieldset/CategoryFieldset";
function Shop() {
  const [products, setProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState(null);
  const [cart, setCart] = useOutletContext();
  const [loading, setLoading] = useState(true);
  const categories = products.reduce((categories, i) => {
    if (!categories.includes(i.category)) {
      return [
        ...categories,
        ...(!filterCategory
          ? [i.category]
          : i.category === filterCategory
          ? [i.category]
          : []),
      ];
    }
    return categories;
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const responseJSON = await response.json();
      setProducts(responseJSON);
      setLoading(false);
    })();
  }, []);
  if (loading) {
    return <section className={styles.section}>Loading products...</section>;
  }
  return (
    <section className={styles.section2}>
      <CategoryFieldset
        categories={categories}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <section className={styles.section}>
        {products
          .filter((i) =>
            !filterCategory ? true : i.category === filterCategory
          )
          .map((i) => (
            <Product key={i.id} product={i} cart={cart} setCart={setCart} />
          ))}
      </section>
    </section>
  );
}

export default Shop;
