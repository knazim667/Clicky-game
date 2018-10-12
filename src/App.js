import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from './components/Jumbotron';
import Card from "./components/Card"; 
import Cards from "./Cards.json";
import Footer from "./components/Footer";


class App extends Component {
  state = {
    Cards
  };

  render () {
    return(

      <Router>
        <div>
        <Navbar />
        <Jumbotron />
        <Wrapper>
          {this.state.Cards.map(card => (
             <Card 
             key={card.id}
             id={card.id}
             image={card.image}
              />
          ))}
        </Wrapper>
        <Footer />
        </div>
      
      </Router>
    )
  }

}


export default App;
