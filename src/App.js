import "./styles/index.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Homepage from './pages/Homepage';
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import Careers from "./pages/Careers";
import { useState } from "react";

const App = () => {

  const [ show, setShow ] = useState(false);

  const showModal = () => {
    console.log('hei');
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  return (
    <Router>
        <main className="App">
          <Navbar showModal={ showModal } />
          
          <div className="content">
            <Routes>
              <Route path="/" element={ <Homepage /> } exact />
              <Route exact element={ <About /> } path="/about" />
              <Route exact element={ <Contact /> } path="/contact" />
              <Route exact element={ <Careers /> } path="/careers" />
            </Routes>
          </div>
          <div className={show === false ? 'hidden' : 'modal_container'}>
            <div className="modal">
              <div className="modal_title">Hei</div>
              <div className="modal_text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, doloribus.</div>
              <button onClick={() => showModal()} className="cta">Close</button>
            </div>
          </div>

          <Footer />
        </main>
      </Router>
  );
};

export default App;
