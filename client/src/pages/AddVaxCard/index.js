import React from "react";
import {
  Box,
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
      </Box>
      <div>

        <CssBaseline />
      </div>
    </>
  );
};

export default AddVaxCard;
