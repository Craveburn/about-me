import React, { Component } from 'react';
import './ListJobs.css'

class Job extends Component {
  render() {
    return (
      <div>
        <div className='jobName'> {this.props.jobName} </div>
        <div className='time'> {this.props.time} </div>
        <div className='desc'> {this.props.desc} </div>
        <div className='tech'> {this.props.tech} </div>
      </div>
    )
  }
}

export default Job