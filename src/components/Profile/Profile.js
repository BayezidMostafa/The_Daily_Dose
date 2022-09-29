import React from 'react';
import './Profile.css';
import profile_logo from '../../profile-logo.png'

const Profile = (props) => {
    const {profiles} = props
    let reqTime = 0;
    
    for(const profile of profiles){
        reqTime = reqTime + profile.req_time;
    }
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
                    <button>10m</button>
                    <button>20m</button>
                    <button>30m</button>
                    <button>40m</button>
                    <button>50m</button>
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
                    <p>{} Minutes</p>
                </div>
            </div>
            <div className='task-complete'>
                <button>Task Complete</button>
            </div>
        </div>
    );
};

export default Profile;


// useEffect(()=>{
//     const localstorageData = localStorage.getItem('যে নামে সেট করেছেন')
//     console.log(localstorageData)
//     },[])