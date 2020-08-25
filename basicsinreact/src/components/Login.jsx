import React, { Component } from "react";
import Container from "./Container";

class Login extends Component {
  state = {};
  render() {
    return (
      <Container>
        <div style={{ padding: "10%" }}>
          <h1>Login</h1>
          <input placeholder="email" />
          <input placeholder="password" />
          <button>Login</button>
        </div>
      </Container>
    );
  }
}

export default Login;
