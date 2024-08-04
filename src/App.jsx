import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home", // home, login, signup
    };
  }

  showLoginPage = () => {
    this.setState({ currentPage: "login" });
  };

  showSignupPage = () => {
    this.setState({ currentPage: "signup" });
  };

  showHomePage = () => {
    this.setState({ currentPage: "home" });
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div className="d-flex flex-column min-vh-100">
        <Header
          showHome={this.showHomePage}
          showLogin={this.showLoginPage}
          showSignup={this.showSignupPage}
        />
        <div className="flex-grow-1">
          {currentPage === "home" && <Body showSignup={this.showSignupPage} />}
          {currentPage === "login" && <LoginPage />}
          {currentPage === "signup" && <SignupPage />}
        </div>
        <Footer />
      </div>
    );
  }
}
