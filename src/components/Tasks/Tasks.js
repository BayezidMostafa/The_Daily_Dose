import React from 'react';
import logo from '../../main-logo.jpg';
import './Tasks.css'

const Tasks = () => {
    return (
        <div>
            <div className='heading-section'>
                <img src={logo} alt="" />
                <h1>THE DAILY DOSE</h1>
            </div>
            <div className='all-tasks'>
                
            </div>
        </div>
    );
};

export default Tasks;