import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/Profile.css";
import user1 from "../assets/img/user1.jpg";
import logo from "../assets/img/dumbways.png";

export default function Profile() {
  return (
    <div className="p-container container-fluid">
      <div className="p-content">
        <div className="row">
          <div className="col-7">
            <div className="row">
              <h2 className="p-h2 pb-4">Profile</h2>
              <div className="col-5">
                <img src={user1} alt="user1" className="user1"></img>
              </div>
              <div className="col-7 text-white ">
                <div>
                  <label className="labels">Name</label>
                  <p>Anna Weston</p>
                </div>
                <div>
                  <label className="labels">Name</label>
                  <p>annawest@gmail.com</p>
                </div>
                <div>
                  <label className="labels">Phone</label>
                  <p>0822-3492-5007</p>
                </div>
                <div>
                  <label className="labels">Gender</label>
                  <p>Male</p>
                </div>
                <div>
                  <label className="labels">Address</label>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5">
            <h2 className="p-h2 pb-4">My Transaction</h2>
            <div className="p-card">
              <div className="p-cards card-body">
                <div className="row">
                  <div className="p-product col-2">
                    <img
                      src="https://www.jakartanotebook.com/images/products/40/779/36270/6/azzor-wireless-gaming-mouse-silent-2400-dpi-m6-blue-1.jpg"
                      alt=""
                      className="p-img-card"
                    ></img>
                  </div>
                  <div className="p-detail col-5 text-white">
                    <div className="p-red">
                      <h6>
                        <b className="">Mouse Gaming</b>
                      </h6>
                      <p>
                        <b>Friday,</b> 10 July 2022
                      </p>
                    </div>
                    <div>
                      <p>Rp. 76.800</p>
                    </div>
                    <div>
                      <p>
                        <b>Sub Total : Rp. 76.800</b>
                      </p>
                    </div>
                  </div>
                  <div className="p-logos col-5">
                    <img src={logo} alt="logo" className="p-logo"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
