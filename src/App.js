import React, { Component } from 'react'
import Home from './Home'
import JobHistory from './JobHistory'
import Projects from './Projects'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Home/> */}
      {/* <JobHistory /> */}
      <Projects />
      </div>
    );
  }
}

export default App;
