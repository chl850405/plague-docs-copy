import React from "react";
import {
  Box,
  TextField,
  Typography,
Paper
} from "@mui/material";

const AddFamily = () => {
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
          Add a Household
        </Typography>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Paper elevation={10} style={paperStyle}   sx={{background: '#94f684',color: '#00738c'}}>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Household Nickname"
            />
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Parent and/or Guardian Last Name(s)"
            />
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Parent and/or Guardian First Name(s)"
            />
            <TextField
              id="outlined-number"
              label="Number of Family Members"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default AddFamily;
