import React from "react";
import './App.css';
import Nav from './Nav';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
  <h1>Home Page </h1>
  </div>
)
export default App;
