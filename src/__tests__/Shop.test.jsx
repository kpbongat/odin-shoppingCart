import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Product from "../Product/Product";
import Shop from "../Shop/Shop";

describe("product list", () => {
  it("renders correct number of products", () => {
    vi.mock("../Shop/Shop", () => ({
      default: () => {
        const products = [
          { id: 1, title: "test1" },
          { id: 2, title: "test2" },
        ];
        const loading = false;
        const cart = {};
        const setCart = vi.fn();
        if (loading) {
          return <section>Loading products...</section>;
        }
        return (
          <section>
            {products.map((i) => (
              <Product key={i.id} product={i} cart={cart} setCart={setCart} />
            ))}
          </section>
        );
      },
    }));
    render(<Shop />);
    expect(screen.queryAllByTestId("product").length).toBe(2);
  });
});
