import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "../css/home.css";
function Home() {
  return (
    <>
      <div className="bodydiv p-2 px-5">
        <nav class="navbar navbar-expand navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand">HRMS</a>
            
            <div class="d-flex ">
              <Link to="login" className="btn btn-primary btn-lg me-5">
                Login
              </Link>
              <Link to="register" className="btn btn-primary btn-lg me-3">
                Register
              </Link>
            </div>
          </div>
        </nav>
        <div className=" w-100 d-flex justify-content-center home-content">
          <div className=" px-md-5">
            <h1>HRM and Payroll Tool</h1>
            <p className="mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Link to="register" className="btn btn-primary btn-lg mt-3">
              GET STARTED - ITS FREE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
