import React, { useEffect, useState } from 'react';
import logo from '../../main-logo.png';
import Blog from '../Blog/Blog';
import Profile from '../Profile/Profile';
import Task from '../Task/Task';
import './Tasks.css'

const Tasks = () => {
    const [tasks, setTasks] = useState([])
    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    const startNowBtnHandle = (task) => {
        const newProfile = [...profiles, task];
        setProfiles(newProfile);
        // console.log(newProfile);
    }
    return (
        <div className='all-content-container'>
            <div className='all-tasks-container'>
                <div className='heading-section'>
                    <img src={logo} alt="" />
                    <h1>THE DAILY DOSE</h1>
                </div>
                <div className='all-tasks'>
                    {
                        tasks.map(task => <Task task={task} key={task.id} startNowBtnHandle={startNowBtnHandle}></Task>)
                    }
                </div>
                <div>
                    <Blog></Blog>
                </div>
            </div>
            <div className='main-profile-container'>
                <Profile profiles={profiles}></Profile>
            </div>
        </div>
    );
};

export default Tasks;