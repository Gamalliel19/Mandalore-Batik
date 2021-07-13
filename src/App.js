import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AboutBatik from './pages/AboutBatik'
import ProduksiBatik from "./pages/ProduksiBatik";
import Construction from "./components/construction/Construction";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/produk">
            <Construction />
          </Route>
          <Route path="/batik-daerah">
            <Construction />
          </Route>
          <Route path="/pengalaman">
            <Construction />
          </Route>
          <Route path="/tentang">
            <AboutBatik />
          </Route>
          <Route path="/produksi">
            <ProduksiBatik />
          </Route>
          <Route path="/filosofi-batik">
            <Construction />
          </Route>
          <Route path="/sejarah">
            <Construction />
          </Route>
          <Route path="/aturan">
            <Construction />
          </Route>
          <Route path="/unesco">
            <Construction />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
