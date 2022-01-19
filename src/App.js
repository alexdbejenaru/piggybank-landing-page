import "./styles/index.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Homepage from './pages/Homepage';
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import Careers from "./pages/Careers";
import { useState } from "react";
import Modal from "./components/Modal";

const App = () => {

  const [ show, setShow ] = useState(true);

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
              <Route path="/" element={ <Homepage showModal={ showModal }/> } exact />
              <Route exact element={ <About /> } path="/about" />
              <Route exact element={ <Contact /> } path="/contact" />
              <Route exact element={ <Careers /> } path="/careers" />
            </Routes>
          </div>
          
          <Modal show={ show } showModal={ showModal }/>

          <Footer showModal={ showModal } />
        </main>
      </Router>
  );
};

export default App;
