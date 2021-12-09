import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import CartWidget from "./CartWidget";
import "./Navbar.css";
class Navbar extends Component {
 
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="brand">Taca Taca</h1>
        <div className="navbar-logo">
          <img src="/logo_tacataca_chico.png" alt="logo" />
        </div>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <CartWidget />
      </nav>
    );
  }
}
export default Navbar;
