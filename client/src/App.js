import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";

import "./styles.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
      </Switch>
    </Router>
  );
};

export default App;
