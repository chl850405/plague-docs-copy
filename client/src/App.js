import React from "react";
import { BrowserRouter as Router,  Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import CreateAcct from "./pages/CreateAcct";
// import AddVaxCard from "./pages/AddVaxCard";
import AddFamily from "./pages/AddFamily";
import Login from "./pages/Login";
import SavedCards from "./pages/SavedCards";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
    
          <Route path="/login" component={Login} />
          <Route path="/sign up" component={CreateAcct} />
          {/* <Route path="/add family" component={AddVaxCard} /> */}
          <Route path="/add family" component={AddFamily} />
          <Route path="/my cards" component={SavedCards} />
          <Route path="/" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
