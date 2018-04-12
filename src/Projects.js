import React, { Component } from 'react'
import ListJobs from './ListJobs'
import './Projects.css'

class Projects extends Component {
    render() {
        return (
            <div className="main">
            <div className='projectName'>Projects</div>
                <div className='project1'>
                    <ListJobs jobName='React: Thinking in Components' time='April 8th, 2018' desc='Created a tic-tac-toe board using components within React.js' tech='React.js & CSS & GIT' />
                </div>
                <div className='project2'>
                    <ListJobs jobName='About Me' time='April 11th, 2018' desc='Created an About Me page using components & props within React.js' tech='React.js & CSS & GIT' />
                </div>
            </div>
        );
    }
}

export default Projects