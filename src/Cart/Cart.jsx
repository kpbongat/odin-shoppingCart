import { useOutletContext } from "react-router-dom";
import Product from "../Product/Product";

function Cart() {
  const [cart, setCart] = useOutletContext();
  return (
    <section>
      {cart.map((i) => (
        <Product key={i.id} product={i} />
      ))}
    </section>
  );
}

export default Cart;
