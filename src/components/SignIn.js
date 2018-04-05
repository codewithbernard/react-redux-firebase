import "./SignIn.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../actions";
import PropTypes from "prop-types";

class Signin extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      this.context.router.history.push("/app");
    }
  }

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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { signIn })(Signin);
