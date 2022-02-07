import React from "react";
import {
  Box,
  Typography,
Paper,
  CssBaseline,
  TextField,
} from "@mui/material";

const AddVaxCard = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 1100,
    margin: "20px auto"
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
        <Typography variant="h2" sx={{ color: "#94f684" }} padding="50px">
          Add a Card
        </Typography>
        <Paper elevation={10} style={paperStyle}   sx={{background: '#94f684',color: '#00738c'}}>
        <TextField
          requiredid="outlined-required"
          label="Required"
          defaultValue="Vaccination Type"
        />
        <TextField
          requiredid="outlined-required"
          label="Required"
          defaultValue="Vaccination Date"
        />
      <TextField
        requiredid="outlined-required"
        label="Required"
        defaultValue="Vaccination Id"
      />
      </Paper>
      </Box>
      <div>

        <CssBaseline />
      </div>
    </>
  );
};

export default AddVaxCard;
