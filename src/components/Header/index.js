import React, { useRef } from "react";
import logo from "../../assets/logo.svg";
import login from "../../assets/login.svg";
import search from "../../assets/search.svg";
import menuMobile from "../../assets/mobile-menu.svg";

import "./styles.css";

const Header = () => {
  const menu = useRef();

  function handleMenuMobile(event) {
    event.preventDefault();
    menu.current.classList.toggle("active");
  }

  return (
    <header className="container">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="nav-menu menu-desktop">
          <ul>
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/">Séries</a>
            </li>
            <li>
              <a href="/">Filmes</a>
            </li>
            <li>
              <a href="/">Infantil</a>
            </li>
          </ul>
        </nav>
        <div className="menu-mobile-button" >
          <a href="/" onClick={handleMenuMobile}>
            <img src={menuMobile} alt="menu mobile" />
          </a>
        </div>
        <nav className="menu-mobile" ref={menu}>
          <ul>
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/">Séries</a>
            </li>
            <li>
              <a href="/">Filmes</a>
            </li>
            <li>
              <a href="/">Infantil</a>
            </li>
          </ul>
        </nav>
        <form className="search-area">
          <img src={search} alt="search icon" />
          <div className="input-search">
            <input placeholder="Buscar" type="text" />
          </div>
        </form>
        <div className="login-area">
          <a href="/">
            <img src={login} alt="" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
