import React, { Component } from 'react';
import Job from './Job'
import './JobHistory.css'

class JobHistory extends Component {
    render() {
        return (
            <div className='main'>
            <div className='jobHistory'>Job History</div>
                <div className='job1'>
                    <Job jobName='Best Buy Team Lead' time='3 Years' desc='I am in charge of 8 employees' />
                </div>
                <div className='job2'>
                    <Job jobName='Big 5 Cashier' time='.5 Years' desc='I was a cashier/iventory specialist' />
                </div>
                <div className='job3'>
                    <Job jobName='Missionary' time='2 Years' desc='Evangelical Ministiring to people in Everett, Washington' />
                </div>
            </div>
        );
    }
}

export default JobHistory