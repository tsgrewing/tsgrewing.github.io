import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={["/", "home"]}>
          <Home />
        </Route>
        <Route exact path={["/portfolio"]}>
          <Portfolio />
        </Route>
        <Route exact path={["contact"]}>
          <Contact />
        </Route>
        <Route exact path={["resume"]}>
          <Resume />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
