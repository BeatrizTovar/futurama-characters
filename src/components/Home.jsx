import React, { Component, Fragment } from "react";
import Body from "../common/body";
import { getCharacters } from "../services/characters";
import * as characterQuote from "../services/characterQuotes";

class Characters extends Component {
  state = {
    characters: [],
    quotes: []
  };

  componentDidMount() {
    console.log("CMD");
    // runs once sets the characters' id, and image
    // this.setState({ characters: getCharacters() });
    let chars = getCharacters();
    // console.log("chars CMD", chars);
    // this.getCharacterQuote(chars);

    this.getCharacterQuote(chars);
  }

  getCharacterQuote(array) {
    this.setState({ characters: array });
    array.map(ch => {
      let quotes = characterQuote.quote(ch.id);
      quotes.then(res => {
        if (res.character === ch.id) {
          ch.randomQuote = res.quote;
          // console.log(ch);
          return ch;
        }
        // console.log("quotes:", quotes);
        // console.log(res);
      });
    });
  }

  render() {
    let characters = this.state.characters;
    // console.log("chars", characters);
    // console.log("quotes", this.state.quotes);

    return (
      <Fragment>
        {console.log("chars: ", this.state.characters)}
        {/* {console.log("quote: ", this.state.quotes)} */}
        <Body characters={characters} />
      </Fragment>
    );
  }
}

export default Characters;
