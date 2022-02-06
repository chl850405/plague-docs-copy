import React from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  TextField,
} from "@mui/material";

const AddVaxCard = () => {
  return (
    <>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
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
      </Box>
      <TextField
        requiredid="outlined-required"
        label="Required"
        defaultValue="Vaccination Id"
      />
      <div>
        <CssBaseline />
      </div>
    </>
  );
};

export default AddVaxCard;
