import React, { Component, Fragment } from "react";
import { Grid } from "grommet";
import "./App.css";
import Navbar from "./common/navbar";
import Body from "./common/body";
import Test from "./common/test";
class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <Grid> */}
        <Navbar />
        <Body />
        <Test />
        {/* </Grid> */}
      </Fragment>
    );
  }
}

export default App;
