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
  let length = data.length;
  let defaultMessage = "Ooops! There seems to be nothing here!";

  data.map(name => console.log(name.quote));
  // console.log(test);

  if (length < 1 || length === undefined) {
    // console.log(defaultMessage);
    return defaultMessage;
  } else {
    //  data[i] where i is a random integer based on array length
    let randomIndex = data[Math.floor(Math.random() * length)];
    // console.log(randomIndex);
    debugger;
    return randomIndex;
  }
};

const errorResponse = response => {
  let errorCode = response.status;
  let errorMessage =
    "Ooops! Something is wrong. Someone needs to check that ASAP!";
  console.log(errorMessage, errorCode);
  //returns a string with a default error message and the status code
  return `${errorMessage} ${errorCode}`;
};

export { quote };
