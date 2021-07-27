import React from "react";
import ReactDOM from "react-dom";
import { Link, Switch, Route } from "react-router-dom";
import "../../css/layout.css";
function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col ">
            <div className="circle" style={{backgroundColor: "blue"}}></div>
            <p className="ms-2">Home</p>
          </div>
          <div className="col">
            <div className="circle" style={{backgroundColor: "gray"}}></div>
            <p >My Account</p>
          </div>
          <div className="col">
            <div className="circle" style={{backgroundColor: "cyan"}}></div>
            <p>Activities</p>
          </div>
          <div className="col">
            <div className="circle" style={{backgroundColor: "magenta"}}></div>
            <p>Resources</p>
          </div>
          <div className="col">
            <div className="circle" style={{backgroundColor: "green"}}></div>
            <p>Payments</p>
          </div>
          <div className="col">
              <div className="box p-3 rounded">
                <p>Mark Attendance</p>
                <p>My Office Time 9AM - 7PM</p>
              
              <div className="mt-3 d-flex justify-content-evenly ">
                <button className="btn btn-primary">Clock In</button>
                <button className="btn btn-danger">Clock Out</button>
              </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
