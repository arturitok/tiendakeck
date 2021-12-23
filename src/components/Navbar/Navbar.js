import React from "react";
import "./NavBar.css";
import CartIcon from "../CartIcon/CartIcon";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <Link className="brand" to="/">
        Taca Taca
      </Link>
      <div className="bar">
        <Link className="ropa" to="/category/ropa">
          Ropa
        </Link>
        <Link className="juegos" to="/category/juegos">
          Juegos
        </Link>
        <Link className="icon-cart" to="/cart">
          <CartIcon />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
