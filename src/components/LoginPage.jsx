import React, { Component } from "react";

export default class LoginPage extends Component {
  render() {
    return (
      <div className="container my-5">
        <h2 className="mb-4 text-center">Login</h2>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="userId">User ID</label>
            <input type="text" className="form-control" id="userId" placeholder="Enter User ID" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    );
  }
}
