import React from 'react';
import { Box } from '@mui/system';
import image from '../../assets/images/pd.png'
import { Avatar } from '@mui/material';

const Logo = () => {
    return(
<>
<Box>
<Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 200, height: 200}}
src={image}/>
</Box>
</>
    );
}

export default Logo;