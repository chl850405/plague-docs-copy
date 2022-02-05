import React from "react";
import { Typography, Box } from "@mui/material";

const About = () => {
  return (
    <>
      <Box align='left' sx={{ height: "100vh", width: "100%", maxWidth: 700, background: "#00738c" }}>
        <Box sx={{alignContent: "center" }}>
        <Typography variant="body1" sx={{color: "#94f684" }}>
          If you’ve lived on earth for the past two years, then you are well
          aware of everything that’s happened here lately! If you’ve received
          the coronavirus vaccine, you need to carry your card around when you
          travel or go places… right? Not anymore! Introducing Plague Docs: the
          new app that carries your vaccine card FOR you!
        </Typography>
        </Box>
      </Box>
    </>
  );
};

export default About;
