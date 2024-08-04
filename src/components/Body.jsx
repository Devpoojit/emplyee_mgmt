import React, { Component } from "react";

export default class Body extends Component {
  render() {
    return (
      <main className="container my-5">
        {/* Introduction Section */}
        <section className="text-center mb-5">
          <h1 className="display-4">Welcome to EmpManager</h1>
          <p className="lead">
            Streamline your employee management with our intuitive platform.
          </p>
          <button
            className="btn btn-primary btn-lg mt-3"
            onClick={this.props.showSignup}
          >
            Get Started
          </button>
        </section>

        {/* Features Section */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Features</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Employee Profiles</h5>
                  <p className="card-text">
                    Manage detailed employee profiles, including personal
                    information, contact details, and job roles.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Attendance Tracking</h5>
                  <p className="card-text">
                    Track employee attendance with ease, including check-in,
                    check-out times, and leave management.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Performance Reports</h5>
                  <p className="card-text">
                    Generate comprehensive performance reports to evaluate
                    employee productivity and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Why Choose EmpManager?</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Efficiency:</strong> Automate routine HR tasks to save
              time and reduce manual errors.
            </li>
            <li className="list-group-item">
              <strong>Scalability:</strong> Easily scale with your organization,
              accommodating any number of employees.
            </li>
            <li className="list-group-item">
              <strong>Security:</strong> Protect sensitive employee data with
              advanced security measures.
            </li>
          </ul>
        </section>

        {/* Call to Action Section */}
        <section className="text-center">
          <h2 className="mb-4">Ready to Transform Your HR Process?</h2>
          <p>
            Start using EmpManager today and experience seamless employee
            management.
          </p>
          <button
            className="btn btn-success btn-lg"
            onClick={this.props.showSignup}
          >
            Sign Up Now
          </button>
        </section>
      </main>
    );
  }
}
