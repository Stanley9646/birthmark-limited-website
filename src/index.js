import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import reportWebVitals from './reportWebVitals';
import Clients from './components/Clients';
import OurProduct from './components/OurProduct';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/ourProduct" element={<OurProduct />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
