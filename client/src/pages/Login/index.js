import React from "react";
import {
  Grid,
  Paper,
  Box,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  // const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <Box
    align="left"
    sx={{
      height: "100vh",
      width: "100%",
      maxWidth: 2000,
      background: "#00738c",
      color: '#94f684'
    }}
  >
    <Grid>
      <Paper elevation={10} style={paperStyle}   sx={{background: '#94f684',color: '#00738c',}}>
        <Grid align="center"   sx={{background: '#00738c',color: '#94f684',}}>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <Button
        sx={{background: '#00738c',color: '#94f684',}}
          type="submit"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
    </Box>
  );
};

export default Login;
