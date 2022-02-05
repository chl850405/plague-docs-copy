import React from 'react';
import {Box, Stack} from '@mui/material';
import Logo from '../../../src/components/Logo'
import About from '../../../src/components/About'

const CreateAcct = () => {
    return(
<>
<Box   sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", textAlign: "center"}}>
<Stack spacing={2}>
  <Logo />
  <About/>
</Stack>
\</Box>
</>
    );
}

export default CreateAcct;