import React from "react";
import { Typography, Box, Button, ButtonGroup } from "@mui/material";

const About = () => {
  return (
    <>
      <Box
        align="left"
        sx={{
          height: "100vh",
          width: "100%",
          maxWidth: 2000,
          background: "#00738c",
        }}
      >
        <Box sx={{ alignContent: "center" }}>
          <Typography variant="h2" sx={{ color: "#94f684" }} padding="50px">
            Plague Docs
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#94f684" }}
            padding="50px"
            alignment="Center"
          >
            If you’ve received the coronavirus vaccine, you need to carry your
            card around when you travel or go places… right? Not anymore! We
            carry your vaccine card FOR you!
          </Typography>
          <br />
          <br />
          <ButtonGroup variant="text" aria-label="text-button-group">
            <Button variant="outlined" sx={{ color: "#94f684" }}>
              Login
            </Button>
            <Button variant="outlined" sx={{ color: "#94f684" }}>
              Signup
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
      <Box sx={{ alignContent: "center" }}></Box>
    </>
  );
};

export default About;
