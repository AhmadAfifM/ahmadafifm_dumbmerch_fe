import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/NavBarUser.css";
import logo from "../assets/img/dumbways.png";
import { Link } from "react-router-dom";

export default function NavBarUser() {
  return (
    <>
      <nav className="navbar">
        <div className="navs row">
          <div className="col-6">
            <Link to="../login">
              <img
                src={logo}
                alt="Dumb Mechandise Logo"
                className="navbar-brand"
              />
            </Link>
          </div>
          <div className="collink col-6 d-flex justify-content-end">
            <Link className="links" to="../">
              Complain
            </Link>
            <Link className="links" to="../register">
              Register
            </Link>
            <Link className="links" to="../register">
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
