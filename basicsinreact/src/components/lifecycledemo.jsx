import React, { Component } from "react";

// this example is taken from DevCadia's react book
export class ErrorCacher extends Component {
  state = { error: null };
  componentDidCatch(error, info) {
    console.log("[componentDidCatch]", error);
    this.setState({ error: info.ComponentStack });
  }
  render() {
    if (this.state.error) {
      return <div>An error occured: {this.state.error}</div>;
    }
    return this.props.children;
  }
}

export class LifeCycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    console.log("constructor Initialized");
    console.log("state is already set", this.state);
  }
  componentDidMount() {
    console.log("[ComponentDidMount]", "Mounted");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("[getDerivedStateFromProps]");
    console.log("[preState]", prevState);
    console.log("[nextProps]", nextProps);
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComnponentUpdate", "[Deciding]");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapShotBeforeUpdate", "AboutToUpdate");
    return `Time is ${Date.now()}`;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[componentDidUpdate]", "Updated");
    console.log("[snapshot]", snapshot);
  }
  componentWillUnmount() {
    console.log("[componentWillUnmount]", "Goodbye cruel world.");
  }
  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  causeErrorNextRender = () => {
    // Set a flag to cause an error on the next render
    // This will cause componentDidCatch to run in the parent
    this.setState({
      causeError: true,
    });
  };
  render() {
    console.log("[render]");
    if (this.state.causeError) {
      throw new Error("oh no !");
    }
    return (
      <div>
        <span> Counter: {this.state.counter} </span>
        <button onClick={this.handleClick}>Click to increment</button>
        <button onClick={this.causeErrorNextRender}>Throw an error</button>
      </div>
    );
  }
}

// export default LifeCycleDemo;
// export default ErrorCacher;
