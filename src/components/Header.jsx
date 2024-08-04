import { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="bg-primary text-white py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="m-0" style={{ cursor: 'pointer' }} onClick={this.props.showHome}>
            EmpManager
          </h1>
          <div>
            <button className="btn btn-danger mx-1" onClick={this.props.showLogin}>
              Login
            </button>
            <button className="btn btn-secondary mx-1" onClick={this.props.showSignup}>
              Sign Up
            </button>
          </div>
        </div>
      </header>
    );
  }
}
