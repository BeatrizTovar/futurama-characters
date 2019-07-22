import axios from "axios";

function quote(character) {
  const promise = axios
    .get(`http://futuramaapi.herokuapp.com/api/characters/${character}`)
    .then(successResponse)
    .catch(errorResponse);

  return promise;
}

const successResponse = response => {
  let data = response.data;
  console.log("D", data);
  const result = response.data.forEach(q => console.log(q.quote));
  // console.log(result)
  // console.log("SR: ", response.data.filter(character => character.quote));
  return response.data;
};

const errorResponse = response => {
  console.log("something went wrong");
};

export { quote };
