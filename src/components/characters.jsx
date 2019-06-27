import React, { Component, Fragment } from "react";
import Body from "../common/body";
import { getCharacters } from "../services/mockCharacterService";

class Characters extends Component {
  state = {
    characters: []
  };

  componentDidMount() {
    this.setState({ characters: getCharacters() });
    debugger;
    // console.log(chars);
  }

  render() {
    console.log(this.state.characters);

    return (
      <Fragment>
        <Body />
      </Fragment>
    );
  }
}

export default Characters;
