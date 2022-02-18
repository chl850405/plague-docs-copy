import React from "react";
import { Typography, Box, Button, ButtonGroup, Paper, Grid } from "@mui/material";

const About = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 500,
    margin: "20px auto",
  };
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
          <Paper elevation={10} style={paperStyle}   sx={{background: '#94f684',color: '#00738c'}}>
          <Typography
            variant="h6"
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
          <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button variant="outlined" sx={{background: "#00738c", color: "#94f684" }}>
              Login
            </Button>
            </Grid>
            <Grid item xs={6}>
            <Button variant="outlined" sx={{ background: "#00738c",color: "#94f684" }}>
              Signup
            </Button>
            </Grid>
            </Grid>
          </ButtonGroup>
         
          </Paper>
        </Box>
      </Box>
      <Box sx={{ alignContent: "center" }}></Box>
    </>
  );
};

export default About;
