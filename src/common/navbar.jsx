import React from "react";
import { Box, Button, Image, Stack } from "grommet";
import ship from "../images/misc/PlanetExpressShip.gif";

const NavbarMenu = () => {
  return (
    <div>
      <Stack>
        <Box border={{ color: "#70e3a2", size: "large" }} background="#70e3a2">
          {/* <div class="ship"> */}
          <Image className="ship" alignSelf="start" src={ship} />
          {/* </div> */}
          <Button primary color="brand" label="Button" alignSelf="end" />
        </Box>
      </Stack>
    </div>
  );
};

export default NavbarMenu;
