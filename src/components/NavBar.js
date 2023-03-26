import React from "react";
import menu from "../assets/icons/menu.svg";
import cart from "../assets/icons/cart.svg";
import search from "../assets/icons/search.svg";
import user from "../assets/icons/user.svg";
import wish from "../assets/icons/wish-list.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container d-flex justify-content-between">
          <button
            className="btn border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <img src={menu} className="img-fluid nav-icon" alt="menu" />
          </button>
          <Link className="navbar-brand" to="">
            Logo Here
          </Link>
          <div className="">
            <img src={search} className="img-fluid nav-icon me-3" alt="menu" />
            <img src={wish} className="img-fluid nav-icon me-3" alt="menu" />
            <img src={cart} className="img-fluid nav-icon me-3" alt="menu" />
            <img src={user} className="img-fluid nav-icon" alt="menu" />
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Menu section
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
