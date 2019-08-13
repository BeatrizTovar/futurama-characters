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
      quotes
        .then(
          res => {
            return res.quote;
          }
          // console.log(quote);
          // this.setState({ quotes: res.quote });
        )
        .then(result => {
          let chars = array;

          let test = result;
          // chars[ch.id].quote = test;
          // this.setState({ characters: chars });
          console.log(chars);
        });

      // console.log(quotes);
    });
  }

  render() {
    let characters = this.state.characters;
    console.log("chars", characters);
    console.log("quotes", this.state.quotes);

    return (
      <Fragment>
        {/* {console.log("chars: ", this.state.characters)} */}
        {/* {console.log("quote: ", this.state.quotes)} */}
        <Body characters={characters} />
      </Fragment>
    );
  }
}

export default Characters;
