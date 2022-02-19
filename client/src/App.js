import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import CreateAcct from "./pages/CreateAcct";
// import AddVaxCard from "./pages/AddVaxCard";
import AddFamily from "./pages/AddFamily";
import Login from "./pages/Login";
import SavedCards from "./pages/SavedCards";
import "./App.css";

function App() {
  return (
    <div className="_wrapper">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/pages/Login" component={Login} />
          <Route path="/pages/CreateAcct" component={CreateAcct} />
          {/* <Route path="/add family" component={AddVaxCard} /> */}
          <Route path="/pages/AddFamily" component={AddFamily} />
          <Route path="/pages/SavedCards" component={SavedCards} />
          <Route path="/" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
