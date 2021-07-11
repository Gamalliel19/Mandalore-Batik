import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AboutBatik from './pages/AboutBatik'

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
