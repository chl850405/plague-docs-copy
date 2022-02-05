import React from 'react';
import { Box } from '@mui/system';
import image from '../../assets/images/pd.png'
import { Avatar } from '@mui/material';

const Logo = () => {
    return(
<>
<Box>
<Avatar src={image}/>
</Box>
</>
    );
}

export default Logo;