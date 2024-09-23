import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Product from "../Product/Product";

const mockShop = async ([productState, loadingState]) => {
  vi.doMock("../Shop/Shop", () => ({
    default: () => {
      const products = productState;
      const loading = loadingState;
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
  return (await import("../Shop/Shop")).default;
};

describe("product list", () => {
  it("renders correct number of products", async () => {
    const products = [
      { id: 1, title: "test1" },
      { id: 2, title: "test2" },
    ];
    const loading = false;
    const Shop = await mockShop([products, loading]);
    render(<Shop />);
    expect(screen.queryAllByTestId("product").length).toBe(2);
  });
  it("renders no products when none fetched", async () => {
    const products = [];
    const loading = false;
    const Shop = await mockShop([products, loading]);
    render(<Shop />);
    expect(screen.queryAllByTestId("product").length).toBe(0);
  });
  it("displays loading message when loading", async () => {
    const products = [];
    const loading = true;
    const Shop = await mockShop([products, loading]);

    render(<Shop />);
    expect(screen.getByText("Loading products...")).toBeInTheDocument();
  });
});
