import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className='main'>
                <div className='header'>
                    <div className='profilePic'>
                        <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/29366265_10215896400513687_213589307745632256_n.jpg?_nc_cat=0&oh=befaa54a4896aa6f323799e95a944e11&oe=5B6B2543" />
                    </div>
                    <div className='myName'>
                        Cameron Raburn
                </div>
                </div>
                <div className='bio'>
                    <div className='bioTitle'>
                        Bio
                    </div>
                    <div className='bioText'>
                        Cameron Raburn was born in Provo, Utah August 30th, 1994 to Rebecca and James Raburn. 
                    </div>
                </div>
                <div className='techInt'>
                    <div className='techTitle'>
                        Tech Interests/Skills
                    </div>
                    <div className='techCont'>
                        <ul>
                            <li>HTML/CSS</li>
                            <li>Git</li>
                            <li>JavaScript/JSON</li>
                            <li>React</li>
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>RESTful APIs</li>
                            <li>MongoDB</li>
                            <li>GitHub</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home