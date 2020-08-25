import React, { Component } from "react";

class Container extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          width: "50%",
          height: "70%",
          borderRadius: "15%",
          backgroundColor: "darkkhaki",
          padding: "30px",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Container;
