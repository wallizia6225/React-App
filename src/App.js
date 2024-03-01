import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './MainComponents/Home'
import About from './MainComponents/About';
import ContactUs from './MainComponents/ContactUs';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
