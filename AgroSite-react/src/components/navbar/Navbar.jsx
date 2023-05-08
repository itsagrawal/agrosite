import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <section>
      <div className="back">
        <div className="overlay"></div>
      </div>
      <nav id="navbar">
        <div className="menu">
          <div>
            <ul>
              <li>
                <NavLink to="/categories">categories</NavLink>
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
              <div className="input-wrap">
                <input type="search" placeholder="Search..." />
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
                <input id="n-input" type="search" placeholder="Search.." />
                <button type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
          </div>
          <i className="fas fa-bars" id="menu-btn"></i>
        </div>
      </nav>
    </section>
  );
}
