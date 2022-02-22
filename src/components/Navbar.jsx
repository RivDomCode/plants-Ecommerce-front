import React from "react";
import logo from "../img/The Only One (2).jpg";

export const Navbar = () => {
  return (
    <nav>
      <i className="fas fa-bars menu"></i>
      <div className="navbar-left">
        {/* <img src={logo} alt="logo" className="nav-logo" /> */}
        <img src="https://img.icons8.com/glyph-neue/64/000000/potted-plant.png" />
        {/* icon taken from :{" "}
<a href="https://icons8.com/icon/qQ0MmZi3z2rX/planta-en-maceta">Planta en maceta icon by Icons8</a>
        </a> */}
        <span>Plants ecommerce</span>
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
