import React, { Component } from "react";

const DEFAULT_QUERY = "redux";

const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;
// console.log(url);
class Dashboard extends Component {
  state = {
    result: null,
    searchTerm: DEFAULT_QUERY,
  };
  componentWillMount() {
    // console.log("component will mount");
    fetch("https://jsonplaceholder.typicode.com/todos ")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <ul>
          <li>Han</li>
          <li>OO yar</li>
        </ul>
      </div>
    );
  }
}

export default Dashboard;
