import ProductItem from "../Product/Product_Item";

export default function Products() {
  return (
    <div className="products_page">
      <h2>Products</h2>
      <div className="products">
        <ProductItem id={1} />
        <ProductItem id={2} />
        <ProductItem id={3} />
        <ProductItem id={4} />
        <ProductItem id={5} />
        <ProductItem id={6} />
        <ProductItem id={7} />
        <ProductItem id={8} />
      </div>
      <div className="pagination">
        <button className="btn btn-primary">last</button>
        <button className="btn btn-primary">1</button>
        <button className="btn btn-primary" disabled>
          5
        </button>
        <button className="btn btn-primary">99</button>
        <button className="btn btn-primary">Next</button>
      </div>
    </div>
  );
}
