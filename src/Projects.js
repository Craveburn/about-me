import React, { Component } from 'react'
import Project from './Project'
import './Projects.css'

class Projects extends Component {
    render() {
        return (
            <div className="main">
            <div className='projectName'>Projects</div>
                <div className='project1'>
                    <Project jobName='React: Thinking in Components' url='https://github.com/Craveburn/tic-tac-toe' time='April 8th, 2018' desc='Created a tic-tac-toe board using components within React.js' tech='React.js & CSS & GIT' />
                </div>
                <div className='project2'>
                    <Project jobName='About Me' url='https://github.com/Craveburn/about-me' time='April 11th, 2018' desc='Created an About Me page using components & props within React.js' tech='React.js & CSS & GIT' />
                </div>
            </div>
        );
    }
}

export default Projects