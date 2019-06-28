import React, { Component, Fragment } from "react";
import Body from "../common/body";
import { getCharacters } from "../services/mockCharacterService";

class Characters extends Component {
  state = {
    characters: []
  };

  componentDidMount() {
    this.setState({ characters: getCharacters() });
  }

  render() {
    // let characters = this.state.characters.id;

    return (
      <Fragment>
        <Body characters={this.state.characters} />
      </Fragment>
    );
  }
}

export default Characters;
