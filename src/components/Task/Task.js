import React from 'react';

const Task = (props) => {
    const { picture, topic, req_time } = props.task;
    console.log(props.task)
    return (
        <div>
            <img src={picture} alt="" />
            <div>
                <p>{topic}</p>
                <p>Time required: {req_time} minutes</p>
            </div>
            <button>Add To List</button>
        </div>
    );
};

export default Task;