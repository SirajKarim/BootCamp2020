import React, { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "siraj" };
    console.log("component initialized");
  }
  componentDidMount() {
    console.log("component mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("updated", prevProps, prevState);
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={() => this.setState({ name: "SirajKarim" })}>
          Click
        </button>
      </div>
    );
  }
}

export default Lifecycle;
