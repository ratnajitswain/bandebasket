import React from "react";
import ReactDOM from "react-dom";

function Login() {
  return (
    <>
    <div className="container d-flex justify-content-center">
      <div className="card mt-5 d-flex justify-content-center shadow px-5 ">
        <h1>Login</h1>
        <div className="mt-4">
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

        <a className="mt-4" href="#">
          Forgot Password
        </a>

        <button className="btn btn-primary mt-4 py-2">Login</button>

        <div className="d-flex justify-content-center mt-4">
            <hr></hr>
            <p>OR</p>
            <hr></hr>
        </div>

        <div className="d-flex justify-content-center mt-3">
            <p>Don't have an account? </p><a href="#">Register</a>
        </div>
      </div>
      </div>
    </>
  );
}
export default Login;
