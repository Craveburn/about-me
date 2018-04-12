import React, { Component } from 'react'
import './Project.css'

class Project extends Component {
    renderTitle() {
        if (this.props.url) {
            return (
                <div className='url'> <a href={this.props.url}>{this.props.jobName}</a> </div>
            )
        } else {
            return (
                <div className='jobName'> {this.props.jobName} </div>
            )
        }
    }

    render() {
        return (
          <div>
            {this.renderTitle()}
            <div className='time'> {this.props.time} </div>
            <div className='desc'> {this.props.desc} </div>
            <div className='tech'> {this.props.tech} </div>
          </div>
        )
      }

}

export default Project