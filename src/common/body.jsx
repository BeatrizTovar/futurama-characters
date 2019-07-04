import React from "react";
import { Box, Image, Stack } from "grommet";
// import Amy from "../images/characters";
// import StarBackground from "../images/misc/StarBackground.png";

const Body = ({ characters }) => {
  // debugger;
  return (
    <Stack>
      {/* {console.log(characters)} */}
      <Box className="body">
        <section className="card">
          <div className="card-content">
            {characters.map(char => (
              <div key={char.id}>
                {/* {char.title} */}
                {/* {char.desc} */}
                {/* {char.src} */}
                {/* {console.log(typeof Amy)} */}
                <Image src={char.src} />
              </div>
            ))}
          </div>
        </section>

        {/* HORIZONTAL LIST */}
        {/* {JSON.stringify(characters)} */}
      </Box>
    </Stack>
  );
};

export default Body;
