import React, { useEffect, useState } from 'react';
import logo from '../../main-logo.png';
import Profile from '../Profile/Profile';
import Task from '../Task/Task';
import './Tasks.css'

const Tasks = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    return (
        <div className='all-content-container'>
            <div className='all-tasks-container'>
                <div className='heading-section'>
                    <img src={logo} alt="" />
                    <h1>THE DAILY DOSE</h1>
                </div>
                <div className='all-tasks'>
                    {
                        tasks.map(task => <Task task={task} key={task.id}></Task>)
                    }
                </div>
            </div>
            <div className='main-profile-container'>
                <Profile></Profile>
            </div>
        </div>
    );
};

export default Tasks;