import React, { Fragment } from "react";
import { Image, Stack } from "grommet";
// import Amy from "../images/characters";
// import StarBackground from "../images/misc/StarBackground.png";

const Body = ({ characters }) => {
  // debugger;
  return (
    <Fragment>
      <Stack>
        <div className="hqBack">
          <section className="card">
            {characters.map(char => (
              <div className="card-content" key={char.id}>
                <Image src={char.src} />
                <p>Name: {char.name}</p>
                <p>Age: {char.name}</p>
                <p>Other: {char.name}</p>
                <div className="card-footer">
                  <p>Desc: {char.desc}</p>
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
