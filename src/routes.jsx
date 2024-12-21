import App from "./App/App";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import ProductDetail from "./ProductDetail/ProductDetail";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "shop/:name", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
