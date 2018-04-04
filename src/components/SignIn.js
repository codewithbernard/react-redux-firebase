import "./SignIn.css";
import React, { Component } from "react";
import { connect } from "react-redux";

class Signin extends Component {
  render() {
    return (
      <div className="row valign-wrapper social-signin-container">
        <div className="col s4 offset-s4">
          <a href="#" className="social-signin">
            <i className="fa fa-google social-signin-icon" />
            Sign In With Google
          </a>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(Signin);
