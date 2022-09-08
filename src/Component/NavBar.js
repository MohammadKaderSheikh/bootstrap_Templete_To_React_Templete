import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
export default class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <nav
          className=" mb-5 navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
          id="mainNav"
        >
          <div className="container">
            <Link className="navbar-brand" to="/">
              Start Bootstrap
            </Link>
            <button
              className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <Link
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    to="/porfolio"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    to="/about"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}
