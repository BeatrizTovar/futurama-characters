import axios from "axios";

function quote(character) {
  const promise = axios
    .get(`http://futuramaapi.herokuapp.com/api/characters/${character}`)
    .then(successResponse)
    .catch(errorResponse);

  return promise;
}

const successResponse = response => {
  console.log(response);
};

const errorResponse = response => {
  console.log("something went wrong");
};

export { quote };
