import { useState } from "react";
import "./Header.css";

const links = ["Home", "About", "Company", "Pages", "Blog", "Shop"];

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleClick = (name) => {
    setActive(name);
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__logo">
          Logo
        </a>

        <button
          type="button"
          className={`header__burger ${open ? "header__burger--open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Menyuni ochish"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`header__menu ${open ? "header__menu--open" : ""}`}>
          <nav className="header__nav">
            <ul className="header__list">
              {links.map((name) => (
                <li className="header__item" key={name}>
                  <a
                    href="#"
                    className={`header__link ${
                      active === name ? "header__link--active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(name);
                    }}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#" className="header__btn" onClick={() => setOpen(false)}>
            <span className="header__btn-text">Get Started</span>
            <span className="header__btn-arrow">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;