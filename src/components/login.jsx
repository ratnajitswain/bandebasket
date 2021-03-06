import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
function Login() {
  return (
    <>
    <div className="container d-flex justify-content-center">
      <div className="card mt-5 d-flex justify-content-center shadow px-5 pt-3">
        <h2>Login</h2>
        <div className="mt-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control py-2"></input>
        </div>
        <div className="mt-4">
          <label className="form-label">Password</label>
          <input type="password" className="form-control py-2"></input>
        </div>
        <div class="mt-4 form-check d-flex justify-content-center">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label ms-3" for="exampleCheck1">
            Remember Me
          </label>
        </div>

        <Link className="mt-4" to="forgotpass">
          Forgot Password
        </Link>

        <button className="btn btn-primary mt-4 py-2">Login</button>

        <div className="d-flex justify-content-center mt-4">
            <hr></hr>
            <p>OR</p>
            <hr></hr>
        </div>

        <div className="d-flex justify-content-center mt-3">
            <p>Don't have an account? </p><Link to="register">Register</Link>
        </div>
      </div>
      </div>
    </>
  );
}
export default Login;
