import React from 'react';

const Task = (props) => {
    const { picture, topic, req_time } = props.task;
    console.log(props.task)
    return (
        <div>
            <img src={picture} alt="" />
        </div>
    );
};

export default Task;