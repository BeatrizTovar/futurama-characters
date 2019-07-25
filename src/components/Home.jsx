import React, { Component, Fragment } from "react";
import Body from "../common/body";
import { getCharacters } from "../services/mockCharacterService";
import * as characterQuote from "../services/characterQuotes";
// import axios from "axios"

class Characters extends Component {
  state = {
    characters: [],
    quotes: []
  };

  componentDidMount() {
    // runs once sets the characters' id, name, desc, missing quote on CDM
    this.setState({ characters: getCharacters() });
  }

  getCharacterQuote(character) {
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

    let promise = characterQuote.quote(character);

    debugger;
    promise.then(response => {
      console.log(response);
      return response;
    });
  }
  render() {
    // let characters = this.state.characters.id;

    return (
      <Fragment>
        {console.log(this.state.characters)}
        {console.log(this.state.quotes)}
        <Body characters={this.state.characters} />
      </Fragment>
    );
  }
}

export default Characters;
