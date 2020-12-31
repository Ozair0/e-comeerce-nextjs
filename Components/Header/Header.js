import React from "react";

export default function Header() {
  return (
    <div className="row_flex col">
      <a className="navbar-brand logo col-md-2 col-12" href="#">
        TeachEX
      </a>
      {/*<input type="search" class="form-control col-md-4 col-12 search_inp" placeholder="Search..."/>*/}
      <div className="input-group col-md-3 col-12 search_inp">
        <input type="search" className="form-control " placeholder="Search" />
        <div className="input-group-append">
          <a
            href="#"
            className="search_inp_icon fa fa-search input-group-text"
          ></a>
        </div>
      </div>
      <a href="#" className="col-2 nav_links_icon">
        My account <i className="fa fa-user fa-2x ml-2"></i>
      </a>
      <a href="#" className="col-2 nav_links_icon">
        Favorites <i className="fa fa-heart fa-2x ml-1"></i>
      </a>
      <a href="#" className="col-2 nav_links_icon">
        Cart <i className="fa fa-cart-plus fa-2x"></i>
      </a>
    </div>
  );
}
