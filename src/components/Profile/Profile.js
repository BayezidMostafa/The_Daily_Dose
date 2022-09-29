import React from 'react';
import './Profile.css';
import profile_logo from '../../profile-logo.png'

const Profile = () => {
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
        </div>
    );
};

export default Profile;