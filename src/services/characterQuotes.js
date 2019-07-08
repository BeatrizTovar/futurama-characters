import axios from "axios";

function quote(character) {
  const promise = axios
    .get(`futuramaapi.herokuapp.com/api/characters/${character}`)
    .then(success);
  // .catch(error);

  return promise;
}

const success = response => {
  console.log(response);
};

export { quote };
