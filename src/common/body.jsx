import React, { Fragment } from "react";
import { Image, Stack } from "grommet";
// import Amy from "../images/characters";
// import StarBackground from "../images/misc/StarBackground.png";

const Body = ({ characters }) => {
  // console.log("chars", characters);
  // console.log(characters.randomQuote);
  // debugger;
  return (
    <Fragment>
      <Stack>
        <div className="hqBack">
          <section className="card">
            {characters.map(char => (
              <div className="card-content" key={char.id}>
                <div className="card-image">
                  <Image src={char.src} />
                </div>
                <div className="card-footer">
                  <p>{`${char.id}`}</p>
                  <p>Quote: {char.randomQuote}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </Stack>
    </Fragment>
  );
};

export default Body;
