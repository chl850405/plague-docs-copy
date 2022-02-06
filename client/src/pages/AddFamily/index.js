import React from "react";
import {
  Box,
  TextField,
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

const AddFamily = () => {
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
        </Box>
      </Box>
    </>
  );
};

export default AddFamily;
