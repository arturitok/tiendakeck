import React from "react"
import "./NavBar.css"
import CartIcon from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className="nav">
      <Link className="brand" to="/">
      <img src="/assets/icons/marcah.png" alt="logo" />
      </Link>
      <div className="bar">
        <Link className="ropa" to="/category/ropa">
          Ropa
        </Link>
        <Link className="juegos" to="/category/juegos">
          Juegos
        </Link>
      </div>
      <Link className="cart-widget" to="/cart">
        <CartIcon />
      </Link>
    </nav>
  )
}

export default NavBar
