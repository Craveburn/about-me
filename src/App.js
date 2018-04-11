import React, { Component } from 'react';
import Home from './Home'
import JobHistory from './JobHistory'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Home/>
      {/* <JobHistory /> */}
      </div>
    );
  }
}

export default App;
