import axios from "axios";

function quote(character) {
  const promise = axios
    .get(`http://futuramaapi.herokuapp.com/api/characters/${character}`)
    .then(successResponse)
    .catch(errorResponse);

  return promise;
}

const successResponse = response => {
  let data = response.data; // save each characters data in an array

  // array of objects each one containing a characters, quote, image,
  // character => id , quote => quote, image is not currently used

  // need: sort through array and return only 1 entry at random
  // check length of array for more than one entry if more less than one
  // return default message

  const result = response.data.forEach(q => console.log(q.quote));
  // console.log(result)
  // console.log("SR: ", response.data.filter(character => character.quote));
  // return response.data;
};

const errorResponse = response => {
  console.log("something went wrong");
};

export { quote };
