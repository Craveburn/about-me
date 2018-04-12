import React, { Component } from 'react'
import Home from './Home'
import JobHistory from './JobHistory'
import Projects from './Projects'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <nav>
          <Link className="navLinks" to="/">Home</Link>
          <Link className="navLinks" to="/jobhistory">Job History</Link>
          <Link className="navLinks" to="/projects">Projects</Link>
        </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/JobHistory" component={JobHistory} />
            <Route path="/Projects" component={Projects} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
