import React, { Fragment } from "react";
import { Box, Image, Stack } from "grommet";
// import Amy from "../images/characters";
// import StarBackground from "../images/misc/StarBackground.png";

const Body = ({ characters }) => {
  // debugger;
  return (
    // <Stack>
    <Fragment>
      {/* {console.log(characters)} */}
      <section className="card">
        {characters.map(char => (
          <div className="card-content" key={char.id}>
            {/* {char.title} */}
            {/* {char.desc} */}
            {/* {char.src} */}
            {/* {console.log(typeof Amy)} */}
            <Image src={char.src} />
          </div>
        ))}
      </section>

      {/* HORIZONTAL LIST */}
      {/* {JSON.stringify(characters)} */}
      {/* </Stack> */}
    </Fragment>
  );
};

export default Body;
