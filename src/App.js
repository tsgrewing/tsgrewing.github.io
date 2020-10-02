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
    <HashRouter basename="/">
      <Nav />
      <Wrapper>
      <Switch>
        <Route exact path={["/", "home", "about", "index"]} component={Home} />
        <Route exact path={["/portfolio"]} component={Portfolio} />
        <Route exact path={["/contact"]} component={Contact} />   
        <Route exact path={["/resume"]} component={Resume} />
      </Switch>
      </Wrapper>
      <Footer />
    </HashRouter>
  );
}

export default App;
