import { useEffect, useState } from "react";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const responseJSON = await response.json();
      setProducts(responseJSON);
    })();
  }, []);
  return <section>{}</section>;
}

export default Shop;
