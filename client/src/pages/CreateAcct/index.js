import React, {useRef} from "react";
import {
  Box,
  Paper,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
// import { border, borderColor, flexbox } from '@mui/system';
import Logo from "../../components/Logo";
import Password from "../../components/Password/Index";

const CreateAcct = () => {
  const valueRef = useRef('') //creating a refernce for TextField Component

    const sendValue = () => {
        return console.log(valueRef.current.value) //on clicking button accesing current value of TextField and outputing it to console 
    }

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 500,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };
  return (
  
    <>
    <form noValidate autoComplete='off'>
      <Container
        sx={{
          minWidth: "100%",
          height: "100vh",
          display: "flex",
          background: "#00738c",
          alignItems: "center",
          color: "#94f684",
          justifyContent: 'space-around'
        }}
      >
        <Box>
      
            <Logo />
        
        </Box>
        <Box>
          <Grid container spacing={2}>
          <Paper elevation={10} style={paperStyle}   sx={{background: '#94f684',color: '#00738c'}}>
          <Grid item xs={8}sx={{ alignContent: 'flex-end' }}>
            <Typography variant="body1">
              Create Your Virtual Vaccine Card Today!
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1">
              Fill out this form to create an account
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth 
              helperText="Please enter your first name"
              id="demo-helper-text-misaligned, margin-normal, fullWidth "
              label="First Name"
              inputRef={valueRef}   //connecting inputRef property of TextField to the valueRef
            />
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth 
              helperText="Please enter your last name"
              id="demo-helper-text-misaligned, margin-normal, fullWidth"
              label="Last Name"
              inputRef={valueRef}   //connecting inputRef property of TextField to the valueRef
            />
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth 
              helperText="Please enter your email"
              id="demo-helper-text-misaligned, margin-normal, fullWidth"
              inputRef={valueRef}   //connecting inputRef property of TextField to the valueRef
            />
          </Grid>
          <Grid item xs={8}>
            <Password/>
          </Grid>
          <Button
        sx={{background: '#00738c',color: '#94f684',}}
          type="submit"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={sendValue}
        >
          Create Account
        </Button>
          </Paper>
          </Grid>
        </Box>
      </Container>
      </form>
    </>
  );
};

export default CreateAcct;
