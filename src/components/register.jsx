import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
function Register() {
  return (
    <>
    <div className="container d-flex justify-content-center">
      <div className="card mt-5 d-flex justify-content-center shadow px-5 pt-3 mb-3">
        <h2>Register</h2>


        <div className="mt-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control py-2"></input>
        </div>
        <div className="mt-4">
          <label className="form-label">Email</label>
          <input type="email" className="form-control py-2"></input>
        </div>
        <div className="mt-4">
          <label className="form-label">Mobile</label>
          <input type="text" className="form-control py-2"></input>
        </div>
        <div className="mt-4">
          <label className="form-label">Date of Birth</label>
          <input type="date" className="form-control py-2"></input>
        </div>
        <div className="mt-4">
          <label className="form-label">Password</label>
          <input type="password" className="form-control py-2"></input>
        </div>
        <div className="mt-4">
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control py-2"></input>
        </div>
        

        <button className="btn btn-primary mt-4 py-2">Register</button>

        <div className="d-flex justify-content-center mt-4">
            <hr></hr>
            <p>OR</p>
            <hr></hr>
        </div>

        <div className="d-flex justify-content-center mt-3">
            <p>Already have an account?</p><Link to="/">Login</Link>
        </div>
      </div>
      </div>
    </>
  );
}
export default Register;
