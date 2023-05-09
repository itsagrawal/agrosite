import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  const [menState, setState] = useState(false);

  return (
    <section>
      <div className="back">
        <div className="overlay"></div>
      </div>
      <nav id="navbar">
        <div className={`menu ${menState ? "menu-open" : ""}`}>
          <div>
            <ul>
              <li>
                <NavLink to="/#product1">Categories</NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to={"/store"}>Store</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/login"}>Log In</NavLink>
              </li>
            </ul>
            <ul className="social-media">
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
            <form>
              <div className="input-wrap flex gap-x-3">
                <input
                  type="search"
                  placeholder="Search..."
                  className="px-2 rounded"
                />
                <button type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="container">
          <Link to="/" className="brand">
            <span>Agro</span>Site
          </Link>
          <div className="container-inner">
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/store"}>Store</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/login"}>Log In</NavLink>
              </li>
            </ul>
            <form>
              <div className="input-wrap">
                <input
                  id="n-input"
                  type="search"
                  placeholder="Search.."
                  className="px-2 rounded"
                />
                <button type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
          </div>
          <i
            className="fas fa-bars"
            id="menu-btn"
            onClick={() => {
              setState((prevState) => !prevState);
            }}
          ></i>
        </div>
      </nav>
    </section>
  );
}
