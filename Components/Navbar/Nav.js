import React, { Component } from "react";
import Header from "../Header/Header";
import Nav_Items from "./Nav_Items";
import SecondMenu from "./SecondMenu";
import FirstMenu from "./FirstMenu";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProdCatg: false,
      showCatgItems: false,
      inSecondMenu: false,
    };
    this.showN = this.showN.bind(this);
  }

  showN() {
    if (this.state.inSecondMenu === false) {
      this.setState({
        showCatgItems: true,
      });
    } else {
      this.setState({
        showProdCatg: true,
        showCatgItems: true,
      });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="nav_items_h">
            <h1 className="text-white">TeachEX</h1>
            <button
              className="navbar-toggler button_nav_border"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon custom-toggler"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="position-absolute products_list">
              <a
                className="nav-link dropdown-link d_parent"
                href="#"
                onMouseEnter={() => {
                  this.setState({
                    showProdCatg: true,
                  });
                }}
              >
                Products
              </a>
              {this.state.showProdCatg ? (
                <FirstMenu
                  onLeave={() => {
                    this.setState({
                      showProdCatg: false,
                      showCatgItems: false,
                    });
                  }}
                  onEnter={this.showN}
                />
              ) : null}

              {this.state.showCatgItems ? (
                <SecondMenu
                  onEnter={() => {
                    this.setState({
                      showProdCatg: true,
                      showCatgItems: true,
                      inSecondMenu: true,
                    });
                  }}
                  onLeave={() => {
                    this.setState({
                      showProdCatg: false,
                      showCatgItems: false,
                      inSecondMenu: false,
                    });
                  }}
                />
              ) : null}
            </div>
            <ul className="navbar-nav">
              <Nav_Items Name="Home" />
              <Nav_Items Name="Store" href="/store" />
              <Nav_Items Name="Contact" href="/contact" />
              <Nav_Items Name="About" href="/about" />
              <Nav_Items Name="Privacy" href="/privacy" />
              <Nav_Items Name="Register" href="/register" />
              <Nav_Items Name="Login" href="/login" />
              <Nav_Items Name="My Account" OC="t_show" href="/account" />
              <Nav_Items Name="Favorites" OC="t_show" href="/favorites" />
              <Nav_Items Name="Cart" OC="t_show" href="/cart" />
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
