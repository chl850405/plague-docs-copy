import { Container, CssBaseline} from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";
import CreateAcct from "./pages/CreateAcct";


const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar position="relative">
      </Navbar>
      <main>
        <div>
          <Container>
            <CreateAcct />
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
