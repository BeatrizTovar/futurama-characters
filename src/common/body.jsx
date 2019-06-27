import React from "react";
import { Box, Image, Carousel, Stack } from "grommet";
import StarBackground from "../images/misc/StarBackground.png";

const Body = () => {
  return (
    <Stack className="test" background="#000">
      {/* <Box
       border={{ color: "brand", size: "large" }}
       background="url(//images/misc/StarBackground.png)"
       background={StarBackground}
     >
     </Box> */}
      <Box height="small" width="large" overflow="hidden">
        <Carousel className="test2">
          <Image
            fit="cover"
            src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
          />
          <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
          <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
        </Carousel>
      </Box>
    </Stack>
  );
};

export default Body;
