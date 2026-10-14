import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/company", label: "Company" },
  { to: "/pages", label: "Pages" },
  { to: "/blog", label: "Blog" },
  { to: "/shop", label: "Shop" },
];

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          Logo
        </Link>

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
              {links.map((item) => (
                <li className="header__item" key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `header__link ${isActive ? "header__link--active" : ""}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Link to="/start" className="header__btn" onClick={closeMenu}>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;