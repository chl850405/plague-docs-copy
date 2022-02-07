import React from "react";
import {
  Box,
  Typography,
Paper,
TableRow,
TableHead,
TableCell,
TableContainer,
TableBody,
Table,
  
} from "@mui/material";

function Data(name, vaccinationType, vaccinationDate,	vaccinationID,	vaccinationFacility
  ) {
  return {Data};
}

const rows = [Data("")];

const SavedCards = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 1100,
    margin: "20px auto"
  };
  return (
    <>
      <Box
        align="left"
        sx={{
          height: "100vh",
          width: "100%",
          maxWidth: 2000,
          background: " #94f684",
         
        }}
      >
        <Typography variant="h2" sx={{ color: "#00738c" }} padding="50px">
          Saved Cards
        </Typography>
        <Paper elevation={10} style={paperStyle}   sx={{background: '#94f684',color: '#00738c'}}> 
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, background: '#00738c'}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell sx={{color: '#94f684'}}>Name</TableCell>
            <TableCell sx={{color: '#94f684'}} align="right">Vaccination Type</TableCell>
            <TableCell sx={{color: '#94f684'}} align="right">Vaccination Date</TableCell>
            <TableCell sx={{color: '#94f684'}} align="right">Vaccination ID</TableCell>
            <TableCell sx={{color: '#94f684'}}  align="right">Vaccination Facility</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell sx={{color: '#94f684'}} align="right">{row.name}</TableCell>
              <TableCell sx={{color: '#94f684'}} align="right">{row.vaccinationType}</TableCell>
              <TableCell sx={{color: '#94f684'}} align="right">{row.vaccinationDate}</TableCell>
              <TableCell sx={{color: '#94f684'}} align="right">{row.vaccinationID}</TableCell>
              <TableCell sx={{color: '#94f684'}} align="right">{row.vaccinationFacility}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </Paper>
        
      </Box>
    </>
  );
};

export default SavedCards;
