import { useEffect, useState, useMemo } from "react";
import Product from "../Product/Product";
import styles from "./Shop.module.css";
import { useOutletContext } from "react-router-dom";
import CategoryFieldset from "../CategoryFieldset/CategoryFieldset";
import SortFieldset from "../SortFieldset/SortFieldset";

function reduceCategories(products, filterCategory) {
  return products.reduce((array, i) => {
    if (!array.includes(i.category)) {
      return [
        ...array,
        ...(!filterCategory
          ? [i.category]
          : i.category === filterCategory
          ? [i.category]
          : []),
      ];
    }
    return array;
  }, []);
}
function Shop() {
  const [products, setProducts] = useState([]);
  const [sortCategory, setSortCategory] = useState(null);
  const [filterCategory, setFilterCategory] = useState(null);
  const [cart, setCart] = useOutletContext();
  const [loading, setLoading] = useState(true);

  const categories = useMemo(
    () => reduceCategories(products, filterCategory),
    [products, filterCategory]
  );

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
      <div>
        <SortFieldset setSortCategory={setSortCategory} />
        <CategoryFieldset
          categories={categories}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
        />
      </div>
      <section className={styles.section}>
        {products
          .filter((i) =>
            !filterCategory ? true : i.category === filterCategory
          )
          .sort(!sortCategory ? (a, b) => +b.id - +a.id : sortCategory)
          .map((i) => (
            <Product key={i.id} product={i} cart={cart} setCart={setCart} />
          ))}
      </section>
    </section>
  );
}

export default Shop;
