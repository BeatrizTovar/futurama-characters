import React from "react";
import { Box, Image, Carousel, Stack } from "grommet";
import StarBackground from "../images/misc/StarBackground.png";

const Body = () => {
  return (
    <Stack>
      {/* <Box
       border={{ color: "brand", size: "large" }}
       background="url(//images/misc/StarBackground.png)"
       background={StarBackground}
     >
     </Box> */}
      <Box>{/* HORIZONTAL LIST */}</Box>
      <Image src={StarBackground} />
    </Stack>
  );
};

export default Body;
