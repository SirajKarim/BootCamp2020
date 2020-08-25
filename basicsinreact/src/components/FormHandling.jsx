import React, { Component } from "react";
class FormHandling extends Component {
  state = {
    username: "",
    comments: "",
    Topic: "react",
  };
  handleUsernameChanged = (event) => {
    this.setState({ username: event.target.value });
  };
  handleCommentChanged = (event) => {
    this.setState({ comments: event.target.comments });
  };
  handleTopicOption = (event) => {
    this.setState({ Topic: event.target.Topic });
  };
  onHandleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.Topic}`);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onHandleSubmit}>
          <label>User Name</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChanged}
          />
          <br />
          <br />
          <label>Comments</label>

          <textarea
            type="text"
            value={this.state.comments}
            onChange={this.handleCommentChanged}
          ></textarea>
          <br />
          <br />
          <label>Topic</label>
          <select value={this.state.Topic} onChange={this.handleTopicOption}>
            <option value="react">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormHandling;
