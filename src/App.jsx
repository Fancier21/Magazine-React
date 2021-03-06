import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'; 

import Header from './components/header';
import Footer from './components/footer';
import Home from "./components/home";
import Teams from './components/teams';
import Team from './components/team';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/teams" component={Teams} />
          <Route exact path="/team/:id" component={Team} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
