import ProductItem from "../Product/Product_Item";

export default function Products() {
  return (
    <div className="products_page">
      <h2>Products</h2>
      <div className="products">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
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
