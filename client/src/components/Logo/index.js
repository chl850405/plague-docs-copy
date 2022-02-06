import React from "react";
import { Box } from "@mui/system";
import image from "../../assets/images/pd.png";
import { Avatar } from "@mui/material";

const Logo = () => {
  return (
    <>
      <Box>
        <Avatar alt="Remy Sharp" src= {image} sx={{ width: 300, height: 300 }} />
      </Box>
    </>
  );
};

export default Logo;
