import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import insta_icon from "../../../src/insta_icon.png";

class LoginOrSignupHeader extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%"
        }}
      >
        <img
          alt="profile pic"
          src={insta_icon}
          width="15%"
          className="insta_icon"
          onClick={() => this.props.history.push("/home")}
        />

        <h2>Basicgram</h2>
      </div>
    );
  }
}

export default withRouter(LoginOrSignupHeader);
