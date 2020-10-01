import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import "./assets/style1.css";


function App() {
  return (
    <Router>
      <Nav />
      <Wrapper>
      <Switch>
        <Route exact path={["/", "home", "about", "index"]}>
          <Home />
        </Route>
        <Route exact path={["/portfolio", "https://tsgrewing.github.io/portfolio"]}>
          <Portfolio />
        </Route>
        <Route exact path={["/contact", "https://tsgrewing.github.io/contact"]}>
          <Contact />
        </Route>
        <Route exact path={["/resume", "https://tsgrewing.github.io/resume"]}>
          <Resume />
        </Route>
      </Switch>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
