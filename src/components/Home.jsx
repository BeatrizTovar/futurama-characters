import React, { Component, Fragment } from "react";
import Body from "../common/body";
import { getCharacters } from "../services/mockCharacterService";
import * as characterQuote from "../services/characterQuotes";
// import axios from "axios";s

class Characters extends Component {
  state = {
    characters: [],
    quotes: []
  };

  componentDidMount() {
    this.setState({ characters: getCharacters() });
    // console.log(this.state.characters.name);
    characterQuote.quote("bender");
    // debugger;
    //   axios
    //     .get("http://futuramaapi.herokuapp.com/api/characters/amy")
    //     .then(response => {
    //       console.log(response);
    //     })
    //     .catch(error => {
    //       console.log("something went wrong");
    //     });
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
