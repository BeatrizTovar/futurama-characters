import React, { Fragment } from "react";
import { Box, Image, Stack } from "grommet";
// import Amy from "../images/characters";
// import StarBackground from "../images/misc/StarBackground.png";

const Body = ({ characters }) => {
  // debugger;
  return (
    // <Stack>
    <Fragment>
      <div className="hqBack">
        <section className="card">
          {characters.map(char => (
            <div className="card-content" key={char.id}>
              <Image src={char.src} />
              <p>{char.title}</p>
              <p>{char.desc}</p>
              <p>{char.src}</p>
              {/* {console.log(typeof Amy)} */}
            </div>
          ))}
        </section>
        {/* </Stack> */}
      </div>
    </Fragment>
  );
};

export default Body;
