import {CssBaseline } from "@mui/material";
import React from "react";
// import { BrowserRouter as Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import CreateAcct from "./pages/CreateAcct";
import AddFamily from "./pages/AddFamily";
import AddVaxCard from "./pages/AddVaxCard";
import SavedCards from "./pages/SavedCards";


const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar position="relative">
      {/* <Route path="/savedCards" component={SavedCards} /> */}
      </Navbar>
            <CreateAcct />
            <AddFamily />
            <AddVaxCard />
            <SavedCards />
    </>
  );
};

export default App;
