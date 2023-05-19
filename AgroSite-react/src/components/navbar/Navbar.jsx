import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../../firebase/ApplicationContext";
export default function Navbar() {
  const [menState, setState] = useState(false);
  return (
    <section>
      <div className="back">
        <div className="overlay"></div>
      </div>
      <nav id="navbar" className="hover:backdrop-blur">
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
              <LogInBtn />
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
            <SearchForm />
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
              <LogInBtn />
            </ul>
            <SearhForm2 />
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

const LogInBtn = () => {
  const { signIn, user, signOutApp } = useAppContext();
  return (
    <li>
      {user ? (
        <a
          onClick={() => {
            signOutApp();
          }}
        >
          Sign Out
        </a>
      ) : (
        <a
          onClick={() => {
            signIn();
          }}
        >
          Log In
        </a>
      )}
    </li>
  );
};
function SearchForm() {
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/product/search/${e.target.search.value}`);
      }}
    >
      <div className="input-wrap flex gap-x-3">
        <input
          type="search"
          placeholder="Search..."
          className="px-2 rounded text-black"
          name="search"
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
}

function SearhForm2() {
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/product/search/${e.target.search.value}`);
      }}
    >
      <div className="input-wrap">
        <input
          id="n-input"
          type="search"
          placeholder="Search.."
          className="px-2 rounded"
          name="search"
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
}
