import React from "react";
import ReactDOM from "react-dom";
import { Link, Switch,Route } from "react-router-dom";
import '../css/layout.css';
import Dashboard from "./dashboard/dashboard"
function Layout(props) {
    
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light layout-nav">
        <div class="container">
          <a class="navbar-brand" href="#">
            Company Name
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active me-3" aria-current="page" href="#">
                <i class="fas fa-bell"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-3" href="#">
                <i class="fas fa-envelope"></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  <i class="fas fa-user-circle"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </nav>

      <div className="container">
       
          <Switch>
          <Route  path={`${props.match.path}`} component={Dashboard}/>
          </Switch>
      </div>
    </>
  );
}

export default Layout;
