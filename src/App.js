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
  );
}

export default App;
