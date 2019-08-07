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
    this.setState({ characters: getCharacters() });
  }

  getCharacterQuote() {
    let characters = this.state.characters;
    let randomQuote = characters.map(character => {
      // ** revise characterService **
      let promise = characterQuote.quote(character.id);
      console.log(character.id);
      // debugger;
      // needs to compare the response from the API to check that the names
      // are the same before extracting the random quote

      promise.then(response => {
        // console.log("res: ", response);
        return response;
      });
    });
    // console.log(this.state.characters);

    // let character = "bender";

    // let promise = characterQuote.quote(character);

    // promise.then(response => {
    //   console.log("res: ", response);
    //   return response;
    // });
  }
  render() {
    // let characters = this.state.characters.id;
    this.getCharacterQuote();

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
