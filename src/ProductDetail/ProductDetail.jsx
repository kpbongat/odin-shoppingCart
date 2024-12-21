import { useOutletContext, useParams } from "react-router-dom";
import Product from "../Product/Product";

function ProductDetail() {
  const { cart, setCart, products } = useOutletContext();
  const { name } = useParams();

  const product = products.find((i) => i.title === name);
  return (
    <Product
      product={product}
      initialQuantity={0}
      cart={cart}
      setCart={setCart}
      inCart={false}
    />
  );
}

export default ProductDetail;
