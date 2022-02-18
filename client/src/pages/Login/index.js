import React, {useRef} from "react";
import {
  Grid,
  Paper,
  Box,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import Password from "../../components/Password/Index";




const Login = () => {

  const valueRef = useRef('') //creating a refernce for TextField Component
  
  const sendValue = () => {
    return console.log(valueRef.current.value) //on clicking button accesing current value of TextField and outputing it to console 
}
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
          placeholder="Enter Email Address"
          multiline
          inputRef={valueRef}   //connecting inputRef property of TextField to the valueRef
          fullWidth
          required
        />
   <Password/>
        <Button
        sx={{background: '#00738c',color: '#94f684',}}
          type="submit"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={sendValue}
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
