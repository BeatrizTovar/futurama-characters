import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./common/navbar";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div class="container">
          <Navbar />
          <h1>HELLO WORLD!</h1>
        </div>
      </Fragment>
    );
  }
}

export default App;
