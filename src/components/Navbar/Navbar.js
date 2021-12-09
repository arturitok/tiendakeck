import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
class Navbar extends Component {
  /* Uso un logo de fontawesome hasta que tenga el de la marca propia.
     Uso map para mostrar los items de menu que definí em MenuItems.js 
     Por ahora solamente refieren a #
  */
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
      </nav>
    );
  }
}
export default Navbar;
