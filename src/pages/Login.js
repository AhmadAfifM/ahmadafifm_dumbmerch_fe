import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/Login.css";
import logo from "../assets/img/dumbways.png";

export default function Login() {
  return (
    <div className="login-container container-fluid d-flex">
      <div className="login-content d-flex">
        <div className="row">
          <div className="login-left col-xs-8 col-sm-8 col-md-8">
            <div>
              <img src={logo} alt=""></img>
            </div>
            <div>
              <h1 className="title">Easy, Fast and Reliable</h1>
              <p className="login-p">
                Go Shopping for merchandise, just go to dumb Merch shopping, the
                biggest merchandise in <b>Indonesia</b>
              </p>
            </div>
            <div className="btns">
              <input class="btn-login btn" type="button" value="Login"></input>
              <input
                class="btn-register btn ms-2"
                type="button"
                value="Register"
              ></input>
            </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4">
            <form className="login-right">
              <h2 className="login">Login</h2>
              <input
                type="email"
                className="form-control mt-5 "
                id="exampleFormControlInput1"
                placeholder="Email"
              />
              <input
                type="password"
                className="form-control mt-3"
                id="exampleFormControlInput1"
                placeholder="Password"
              />
              <button class="btn mt-5" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
