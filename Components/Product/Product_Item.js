export default function ProductItem() {
  return (
    <div className="d-flex justify-content-center">
      <div className="product-card p-3 bg-white">
        <i className="fa fa-apple"></i>
        <div className="about-product text-center mt-2">
          <img src="https://i.imgur.com/3VTaSeb.png" width="300" />
          <div>
            <h4>Believing is seeing</h4>
            <h6 className="mt-0 text-black-50">Apple pro display XDR</h6>
          </div>
        </div>
        <div className="stats mt-2">
          <div className="d-flex justify-content-between p-price">
            <span>Pro Display XDR</span>
            <span>$5,999</span>
          </div>
          <div className="d-flex justify-content-between p-price">
            <span>Pro stand</span>
            <span>$999</span>
          </div>
          <div className="d-flex justify-content-between p-price">
            <span>Vesa Mount Adapter</span>
            <span>$199</span>
          </div>
        </div>
        <div className="d-flex justify-content-between total font-weight-bold mt-4">
          <span>Total</span>
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
