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
        yo!
        <section className="card">
          {characters.map(char => (
            <div className="card-content" key={char.id}>
              {char.title}
              {char.desc}
              {char.src}
              {console.log(typeof Amy)}
              <Image src={char.src} />
            </div>
          ))}
        </section>
        {/* </Stack> */}
      </div>
    </Fragment>
  );
};

export default Body;
