import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./common/navbar";
import Body from "./common/body";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Body />
      </Fragment>
    );
  }
}

export default App;
