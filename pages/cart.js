export default function cart() {
  return (
    <div className="cart_p shadow-lg rounded">
      <div className="cart_item table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Item Name</th>
              <th>QTY</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img
                  src="/images/product.jpg"
                  width="80"
                  className="shadow-sm rounded"
                />
              </td>
              <td>Apple Watch</td>
              <td>
                <input
                  type="number"
                  defaultValue="1"
                  className="cart_qty_i shadow-sm"
                />
              </td>
              <td>$300</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <img
                  src="/images/product.jpg"
                  width="80"
                  className="shadow-sm rounded"
                />
              </td>
              <td>Apple Watch</td>
              <td>
                <input
                  type="number"
                  defaultValue="2"
                  className="cart_qty_i shadow-sm"
                />
              </td>
              <td>$600</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="cart_c_c">
        <div className="cart_c_d">
          <label>Coupon</label>
          <input
            type="text"
            placeholder="Coupon"
            className="cart_cou_i shadow-sm"
          />
          <button className="cart_c_btn shadow-sm">Add</button>
        </div>
        <div className="cart_c_d mr-5">
          <h4>Subtotle</h4>
          <p>$900</p>
        </div>
      </div>
      <div className="cart_ch">
        <button className="cart_checkout_b shadow-sm">Go To Checkout</button>
      </div>
    </div>
  );
}
