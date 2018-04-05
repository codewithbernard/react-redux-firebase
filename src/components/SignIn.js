import "./SignIn.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../actions";

class Signin extends Component {
  render() {
    return (
      <div className="row valign-wrapper social-signin-container">
        <div className="col s4 offset-s4">
          <a href="#" className="social-signin" onClick={this.props.signIn}>
            <i className="fa fa-google social-signin-icon" />
            Sign In With Google
          </a>
        </div>
      </div>
    );
  }
}

export default connect(null, { signIn })(Signin);
