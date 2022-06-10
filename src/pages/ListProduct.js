import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/ListProduct.css";

export default function ListProduct() {
  return (
    <div className="l-container container-fluid">
      <div className="l-content container">
        <h4 className="text-white pb-3">List Product</h4>
        <table class="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Photo</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Desc</th>
              <th scope="col">Price</th>
              <th scope="col">Qty</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mouse.jpg</td>
              <td>Mouse</td>
              <td>Lorem ipsum dolor...</td>
              <td>78.600</td>
              <td>200</td>
              <td>
                <div className="action">
                  <div className="pe-3">
                    <button className="btn-edit btn">Edit</button>
                  </div>
                  <div>
                    <button className="btn-delete btn">Delete</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Keyboard.jpg</td>
              <td>Keyboard</td>
              <td>Lorem ipsum dolor...</td>
              <td>150.500</td>
              <td>150</td>
              <td>
                <div className="action">
                  <div className="pe-3">
                    <button className="btn-edit btn">Edit</button>
                  </div>
                  <div>
                    <button className="btn-delete btn">Delete</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Cooling-pad.jpg</td>
              <td>Cooling Pad</td>
              <td>Lorem ipsum dolor...</td>
              <td>198500</td>
              <td>50</td>
              <td>
                <div className="action">
                  <div className="pe-3">
                    <button className="btn-edit btn">Edit</button>
                  </div>
                  <div>
                    <button className="btn-delete btn">Delete</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Webcam.jpg</td>
              <td>Web Camera</td>
              <td>Lorem ipsum dolor...</td>
              <td>65.900</td>
              <td>500</td>
              <td>
                <div className="action">
                  <div className="pe-3">
                    <button className="btn-edit btn">Edit</button>
                  </div>
                  <div>
                    <button className="btn-delete btn">Delete</button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
