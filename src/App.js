<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import ProsesPembuatan from './pages/ProsesPembuatan';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/ProsesPembuatan" component={ProsesPembuatan}></Route>
      </Router>
    </div>
=======
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AboutBatik from './pages/AboutBatik'
import ProduksiBatik from "./pages/ProduksiBatik";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/about">
            <AboutBatik />
          </Route>
          <Route path="/produksi">
            <ProduksiBatik />
          </Route>
        </Switch>
      </div>
    </Router>
>>>>>>> 9673010638d0e2ef7043f7d211700044bc80a868
  );
}

export default App;
