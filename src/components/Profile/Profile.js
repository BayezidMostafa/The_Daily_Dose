import React, { useEffect, useState } from 'react';
import './Profile.css';
import profile_logo from '../../profile-logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = (props) => {
    const { profiles } = props;
    const [breaks, setBreaks] = useState([]);
    const breakTimeHandler = (time) => {
        setBreaks(time);
        localStorage.setItem('time', time);
    }
    const getStoredData = localStorage.getItem('time');
    useEffect(()=>{
        if(getStoredData){
            setBreaks(getStoredData);
        }
    }, [getStoredData])
    let reqTime = 0;
    for (const profile of profiles) {
        reqTime = reqTime + profile.req_time;
    }
    const loadToast = () => toast("Yahoo! Task Completed!");
    return (
        <div className='profile-container'>
            <div className='account-info'>
                <img src={profile_logo} alt="" />
                <div className='info-container'>
                    <p className='account-name'>Bayezid Mostafa</p>
                    <p className='account-location'>Jhenaidah, Khulna, Bangladesh</p>
                </div>
            </div>
            <div className='user-information'>
                <div>
                    <p>76<small className='disabled-color'>kg</small></p>
                    <p>Weight</p>
                </div>
                <div>
                    <p>5.10</p>
                    <p>Height</p>
                </div>
                <div>
                    <p>25<small className='disabled-color'>years</small></p>
                    <p>Age</p>
                </div>
            </div>
            <div>
                <p className='break-text'>Need A Break?</p>
                <div className='break-btn-container'>
                    <button onClick={() => breakTimeHandler(10)}>10m</button>
                    <button onClick={() => breakTimeHandler(20)}>20m</button>
                    <button onClick={() => breakTimeHandler(30)}>30m</button>
                    <button onClick={() => breakTimeHandler(40)}>40m</button>
                    <button onClick={() => breakTimeHandler(50)}>50m</button>
                </div>
            </div>
            <div className='time-information-container'>
                <p className='task-time-info-title'>Task Time Information</p>
                <div className='time-info'>
                    <p>Task Time</p>
                    <p>{reqTime} Minutes</p>
                </div>
                <div className='time-info'>
                    <p>Break Time</p>
                    <p>{breaks} Minutes</p>
                </div>
            </div>
            <div className='task-complete'>
                <button onClick={loadToast}>Task Complete</button>
                <ToastContainer
                    position="top-center"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </div>
    );
};

export default Profile;