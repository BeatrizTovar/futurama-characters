import React, { Component, Fragment } from "react";
import Body from "../common/body";
import { getCharacters } from "../services/characters";
import * as characterQuote from "../services/characterQuotes";
import { resolve } from "q";

class Characters extends Component {
  state = {
    characters: [],
    quotes: []
  };

  componentDidMount() {
    console.log("CMD");
    // runs once sets the characters' id, and image
    this.setState({ characters: getCharacters() });
    // let chars = getCharacters();
    // console.log(chars);
    this.getCharacterQuote();
  }

  getCharacterQuote() {
    let characters = this.state.characters;

    let randomQuote = characters.map(character => {
      let promise = characterQuote.quote(character.id);

      promise.then(response => {
        console.log("res: ", response.character, response.quote);
        return response;
      });

      return promise;
    });

    console.log("rQ", randomQuote);
  }

  render() {
    // let characters = this.state.characters.id;

    return (
      <Fragment>
        {/* {console.log("chars: ", this.state.characters)} */}
        {/* {console.log("quote: ", this.state.quotes)} */}
        <Body characters={this.state.characters} />
      </Fragment>
    );
  }
}

export default Characters;
