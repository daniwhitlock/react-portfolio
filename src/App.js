import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
 
  return (
    <Router>
    <div>
      <Nav></Nav>
      <main>
        <Route path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </main>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
