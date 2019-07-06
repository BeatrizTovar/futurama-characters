import React from "react";
import { Box, Button, Image, Stack } from "grommet";
import ship from "../images/misc/PlanetExpressShip.gif";

const NavbarMenu = () => {
  return (
    <div>
      <Stack>
        <Box
          className="starBack"
          // border={{ color: "#70e3a2", size: "large" }}
          // background="#70e3a2"
        >
          <Image className="ship" alignSelf="start" src={ship} />
          <Button primary color="brand" label="Button" alignSelf="end" />
        </Box>
      </Stack>
    </div>
  );
};

export default NavbarMenu;
