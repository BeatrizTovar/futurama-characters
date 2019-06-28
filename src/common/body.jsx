import React from "react";
import { Box, Image, Stack } from "grommet";
import Amy from "../images/characters/AmyWong.png";
// import StarBackground from "../images/misc/StarBackground.png";

const Body = ({ characters }) => {
  debugger;
  return (
    <Stack>
      {console.log(characters)}

      {/* <Box
       border={{ color: "brand", size: "large" }}
       background="url(//images/misc/StarBackground.png)"
       background={StarBackground}
     >
     </Box> */}
      <Box>
        {characters.map(char => (
          <div key={char.id}>{char.title}</div>
        ))}
        {/* HORIZONTAL LIST */}
        <Image src="../images/characters/AmyWong.png" alignSelf="center" />
        {JSON.stringify(characters)}
      </Box>
    </Stack>
  );
};

export default Body;
