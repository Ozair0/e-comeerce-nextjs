import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer">
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

      <div className="fm">
        <p>Menu</p>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/store">
            <a>Store</a>
          </Link>
          <Link href="/">
            <a>My Account</a>
          </Link>
          <Link href="/">
            <a>Login</a>
          </Link>
          <Link href="/">
            <a>Register</a>
          </Link>
          <Link href="/">
            <a>About US</a>
          </Link>
        </div>
      </div>

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
    </footer>
  );
}
