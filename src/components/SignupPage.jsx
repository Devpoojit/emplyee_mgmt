import React, { Component } from "react";

export default class SignupPage extends Component {
  render() {
    return (
      <div className="container my-5">
        <h2 className="mb-4 text-center">Sign Up</h2>
        <form>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className="form-control" id="firstName" placeholder="First Name" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email ID</label>
            <input type="email" className="form-control" id="email" placeholder="Enter Email" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="role">Role</label>
            <select className="form-control" id="role">
              <option>Employee</option>
              <option>HR</option>
              <option>Admin</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" className="form-control" id="dob" />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
