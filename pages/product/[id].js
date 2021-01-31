import { useRouter } from "next/router";

export default function product() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="product_main_c">
      <div className="product_top">
        <div className="right_p_m_c">
          <div className="link_hist">
            <a href="#">Home </a>/<a href="#"> Test </a>/<a href="#">Product</a>
          </div>
          <div className="product_image_info">
            <div className="p_main_image">
              <img src="/images/product.jpg" width="280" />
            </div>
            <div className="p_main_images">
              <a href="#">
                <img src="/images/product.jpg" width="80" />
              </a>
              <a href="#">
                <img src="/images/product.jpg" width="80" />
              </a>
              <a href="#">
                <img src="/images/product.jpg" width="80" />
              </a>
            </div>
          </div>
        </div>
        <div className="left_p_m_c shadow-lg p-3 mb-5 bg-white rounded">
          <a href="#" className="product_fav">
            <i className="fa fa-heart fa-2x ml-1"></i>
          </a>

          <div className="pr_div">
            <p>Priveous price:&nbsp;&nbsp;</p>
            <p className="pr_line">$300</p>
          </div>
          <p>Price: $500</p>
          <p className="y_s_p">You save $200</p>
          <p className="r_s_p">
            Return period: <span>10 days</span>
          </p>
          <div className="quantity_p">
            <label>Quantity:&nbsp;&nbsp;</label>
            <input
              type="number"
              defaultValue={1}
              className="form-control w-25"
            />
          </div>
          <button className="btn btn-primary w-100">Buy Now</button>
          <button className="btn btn-secondary mt-2 w-100">Add To Cart</button>
          <p className="w_w_p">Free Shipping World Wide</p>
        </div>
      </div>
      <div className="product_bellow">
        <h3>Description</h3>
        <p>
          Just a test Description Just a test Description Just a test
          Description
          <br />
          Just a test Description Just a test Description Just a test
          Description
          <br />
          Just a test Description Just a test Description Just a test
          Description
          <br />
          Just a test Description Just a test Description Just a test
          Description
          <br />
        </p>
      </div>
    </div>
  );
}
