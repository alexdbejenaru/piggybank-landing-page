import "../styles/index.scss";
import Navbar from "./Navigation/Navbar";
import Homepage from '../pages/Homepage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "../pages/Contact";
import Footer from '../components/Footer';

const App = () => {
  return (
    <Router>
        <main className="App">
          <Navbar />
          
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <Homepage />
              </Route>
              
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>

          <Footer />
        </main>
      </Router>
  );
};

export default App;
