import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/Login.css";
import logo from "../assets/img/dumbways.png";

export default function Login() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="content">
        <div className="row p-5">
          <div className="col-7">
            <img src={logo} alt=""></img>
            <h1 className="title">Easy, Fast and Reliable</h1>
            <span>Go Shopping for merchandise, just go to dumb Merch</span>
            <br></br>
            <span>
              shopping, the biggest merchandise in <b>Indonesia</b>
            </span>
          </div>
          <div className="log col-5">
            <form className="">
              <h2 className="login mt-5">Register</h2>
              <input
                type="text"
                className="form-control mt-5 "
                id="exampleFormControlInput1"
                placeholder="Name"
              />
              <input
                type="email"
                className="form-control mt-3 "
                id="exampleFormControlInput1"
                placeholder="Email"
              />
              <input
                type="password"
                className="form-control mt-3"
                id="exampleFormControlInput1"
                placeholder="Password"
              />
              <button class="btn mt-5 mb-5" type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
        <div>
          <input class="btn-login btn" type="button" value="Login"></input>
          <input
            class="btn-register btn ms-2"
            type="button"
            value="Register"
          ></input>
        </div>
      </div>
    </div>
  );
}
