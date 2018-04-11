import React, {Component} from 'react';
import './ListJobs.css'

class ListJobs extends Component {
    render() {
      return (
        <div>
        <div className='jobName'>  {this.props.jobName} </div>
        <div className='time'> {this.props.time} </div>
        <div className='desc'> {this.props.desc} </div>
        </div>
      );
    }
  }

export default ListJobs