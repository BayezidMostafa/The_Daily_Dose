import React from 'react';
import './Task.css'

const Task = (props) => {
    const { picture, topic, req_time } = props.task;
    console.log(props.task)
    return (
        <div className='task-container'>
            <img src={picture} alt="" />
            <div className='task-info-container'>
                <p className='topic-title'>{topic}</p>
                <p className='task-duration'>Time required: <span>{req_time}</span> minutes</p>
            </div>
            <div className='task-btn'>
                <button>Add To List</button>
            </div>
        </div>
    );
};

export default Task;