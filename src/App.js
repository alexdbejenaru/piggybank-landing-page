import "./styles/index.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Homepage from './pages/Homepage';
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import Careers from "./pages/Careers";

const App = () => {
  return (
    <Router>
        <main className="App">
          <Navbar />
          
          <div className="content">
            <Routes>
              <Route path="/" element={ <Homepage /> } exact />
              <Route exact element={ <About /> } path="/about" />
              <Route exact element={ <Contact /> } path="/contact" />
              <Route exact element={ <Careers /> } path="/careers" />
            </Routes>
          </div>

          <Footer />
        </main>
      </Router>
  );
};

export default App;
