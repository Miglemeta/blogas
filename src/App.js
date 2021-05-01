import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/post/:posturl" component={Post} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
