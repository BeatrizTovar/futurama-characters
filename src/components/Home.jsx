import React, { Component, Fragment } from "react";
import Body from "../common/body";
import { getCharacters } from "../services/mockCharacterService";
import * as characterQuote from "../services/characterQuotes";
import { get } from "https";
// import axios from "axios"

class Characters extends Component {
  state = {
    characters: [],
    quotes: []
  };

  componentDidMount() {
    console.log("CMD");
    // runs once sets the characters' id, name, desc, missing quote on CDM
    this.setState({ characters: getCharacters() });
  }

  getCharacterQuote() {
    let characters = this.state.characters;
    let randomQuote = characters.map(character => {
      console.log(character.name.split(" "));
      let promise = characterQuote.quote(character.name);
      // debugger;
      promise.then(response => {
        console.log("res: ", response);
        return response;
      });
    });
    console.log("characterQuote", randomQuote);

    // Option 1
    // need to read the quote based on the character which comes
    // the characterQuote service
    // needs to be called after CMD which adds the names to the object
    // once that;s set need to read per name and
    // add quote property to each character object

    // Option 2
    // obtain quotes from second api and do the mapping and matching
    // in the body just as the mapping of all characters

    // characterQuote returns a promise
    // need to resolve promise
    // create new promise and resolve it into new variable

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
