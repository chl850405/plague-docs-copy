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

const SavedCards = () => {
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
          Saved Cards
        </Typography>
      </Box>
      <div>
        <CssBaseline />
      </div>
    </>
  );
};

export default SavedCards;
