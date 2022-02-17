import React from "react";
import logo from "../img/The Only One (2).jpg";

export const Navbar = () => {
  return (
    <nav>
      <i className="fas fa-bars menu"></i>
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Tools</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">email@ejemplo.com</li>
          <li className="navbar-shopping-cart">
            <i class="fas fa-shopping-cart"></i>
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
