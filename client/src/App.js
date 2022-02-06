import { Container, CssBaseline } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";
import CreateAcct from "./pages/CreateAcct";
import AddFamily from "./pages/AddFamily";
import AddVaxCard from "./pages/AddVaxCard";
import SavedCards from "./pages/SavedCards";


const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar position="relative"></Navbar>
      <main>
        <div>
          <Container>
            <CreateAcct />
            <AddFamily />
            <AddVaxCard />
            <SavedCards />
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
