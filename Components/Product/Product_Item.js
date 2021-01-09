export default function ProductItem() {
  return (
    <div className="d-flex justify-content-center product_it">
      <div className="product-card p-3 bg-white">
        <i className="fa fa-apple"></i>
        <div className="about-product text-center mt-2">
          <img src="/images/product.jpg" width="180" />
          <div>
            <h4>Believing is seeing</h4>
            <h6 className="mt-0 text-black-50">Apple pro display XDR</h6>
          </div>
        </div>
        <div className="d-flex justify-content-between total font-weight-bold mt-4">
          <span>Price</span>
          <span>$7,197.00</span>
        </div>
        <div className="d-flex justify-content-between total font-weight-bold mt-4">
          <button className="btn btn-primary">View</button>
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
