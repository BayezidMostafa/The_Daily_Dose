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
                <p className='duration'>Time required: {req_time} minutes</p>
            </div>
            <div className='task-btn'>
                <button>Add To List</button>
            </div>
        </div>
    );
};

export default Task;