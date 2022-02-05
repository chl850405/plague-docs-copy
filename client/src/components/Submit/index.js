import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Submit() {
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <div>
        <Button variant="contained" size="large"/>
      </div>
    </Box>
  );
}
export default Submit;