import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./common/navbar";
import Characters from "./components/Home";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Characters />
      </Fragment>
    );
  }
}

export default App;
