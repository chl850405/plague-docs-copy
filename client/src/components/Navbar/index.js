import * as React from "react";
import {
  Typography,
  AppBar,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Tooltip
} from "@mui/material";
import Settings from "@mui/icons-material/Settings";
import LogoutIcon from '@mui/icons-material/Logout';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    background: '#00738c',
    border: 0,
    borderRadius: 3,
    color: '#94f684',
    height: 48,
    padding: '0 30px',
  },
});


const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar className={classes.root} sx={{background: '#00738c'}}>
      <React.Fragment>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", textAlign: "center"}}
        >
          <Typography sx={{ minWidth: 100}}>My Account</Typography>
          <Tooltip className={classes.root} title="Account settings">
            <IconButton
            ref={anchorEl}
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Settings/>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            My Account
          </MenuItem>
          <MenuItem>
          My Cards
          </MenuItem>
          <Divider />
          <MenuItem>
            Add Family
          </MenuItem>
          <MenuItem>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </React.Fragment>
      </AppBar>
    </>
  );
};

export default Navbar;
