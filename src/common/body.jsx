import React from "react";
import { Box, Image } from "grommet";
import StarBackground from "../images/misc/StarBackground.png";

const Body = () => {
  return (
    <Box
      border={{ color: "brand", size: "large" }}
      background="url(//images/misc/StarBackground.png)"
    >
      {/* <Image src={StarBackground} /> */}
    </Box>
  );
};

export default Body;
