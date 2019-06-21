import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./common/navbar";
import Body from "./common/body";
import Test from "./common/test";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Body />
        <Test />
      </Fragment>
    );
  }
}

export default App;
