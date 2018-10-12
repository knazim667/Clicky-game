import React from 'react';
//import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from './components/Jumbotron';
//import Footer from "./components/Footer";
//import Header from "./components/Header";


const App = () => (
  <Router>
    <div>
    <Navbar />
    <Jumbotron />
    </div>
    
  </Router>
  
);

export default App;
