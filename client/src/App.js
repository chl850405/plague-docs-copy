import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateAcct from "./pages/CreateAcct";
import AddFamily from "./pages/AddFamily";
import AddVaxCard from "./pages/AddVaxCard";
import SavedCards from "./pages/SavedCards";
import Login from "./pages/Login";
import About from "./components/About";

const App = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handle = () => {
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", pwd);
  };
  const remove = () => {
    localStorage.removeItem("");
    localStorage.removeItem("Password");
  };

  return (
    <>
      <Router>
        <Navbar position="relative">
          <Route path="/SavedCards" component={SavedCards} />
          <Route path="/AddFamily" component={AddFamily} />
        </Navbar>
        <About />
        <CreateAcct />
        <Login />
        <AddFamily />
        <AddVaxCard />
        <SavedCards />
      </Router>
    </>
  );
};

export default App;
