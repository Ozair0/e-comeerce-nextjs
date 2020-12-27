export default function Footer() {
  return (
    <footer className="footer">
      <div className="fs">
        <p>Search</p>
        <div className="input-group">
          <input type="search" className="form-control " placeholder="Search" />
          <div className="input-group-append">
            <a
              href="#"
              className="search_inp_icon fa fa-search input-group-text"
            ></a>
          </div>
        </div>
      </div>
      <div className="fm">
        <p>Menu</p>
        <div>
          <a href="#">Home</a>
          <a href="#">Store</a>
          <a href="#">My account</a>
          <a href="#">Login</a>
          <a href="#">Register</a>
          <a href="#">About US</a>
        </div>
      </div>
      <div className="fu">
        <p>Follow US</p>
        <div>
          <a href="#">
            <i className="fa fa-facebook fa-lg"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram fa-lg"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter fa-lg"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
