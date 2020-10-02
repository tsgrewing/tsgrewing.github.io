import React from 'react';
import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom";
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
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Nav />
      <Wrapper>
      <Switch>
        <Route exact path={["/", "home", "about", "index"]}>
          <Home />
        </Route>
        <Route exact path={["/portfolio", "/gh-pages-url/portfolio"]}>
          <Portfolio />
        </Route>
        <Route exact path={["/contact", "/gh-pages-url/contact"]}>
          <Contact />
        </Route>
        <Route exact path={["/resume", "/gh-pages-url/resume"]}>
          <Resume />
        </Route>
      </Switch>
      </Wrapper>
      <Footer />
    </HashRouter>
  );
}

export default App;
