import React from "react";
import { Box, Image, Stack } from "grommet";
// import Amy from "../images/characters";
// import StarBackground from "../images/misc/StarBackground.png";

const Body = ({ characters }) => {
  // debugger;
  return (
    <Stack>
      {/* {console.log(characters)} */}
      <Box>
        {characters.map(char => (
          <section className="card">
            <div className="card-content" key={char.id}>
              {/* {char.title} */}
              {/* {char.desc} */}
              {/* {char.src} */}
              {/* {console.log(typeof Amy)} */}
              <Image src={char.src} />
            </div>
          </section>
        ))}

        {/* HORIZONTAL LIST */}
        {/* {JSON.stringify(characters)} */}
      </Box>
    </Stack>
  );
};

export default Body;
