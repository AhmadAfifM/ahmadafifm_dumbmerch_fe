import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/ListCategory.css";

export default function ListProduct() {
  return (
    <div className="l-container container-fluid">
      <div className="l-content container">
        <h4 className="text-white pb-3">List Product</h4>
        <table class="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Category Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mouse</td>
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
              <td>Keyboard</td>
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
              <td>Cooling Pad</td>
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
              <td>Web Camera</td>
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
