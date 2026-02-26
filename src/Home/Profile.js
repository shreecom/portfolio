/*eslint-disable*/
import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";
import webImage from '../asset/web.png';
export default function Profile() {
    return (
        <>

            {/* <div className='profile-container' data-aos="fade-down" data-aos-duration="1000"> */}
            <div className='profile-container'>
                <div className='profile-parent'>
                    <div className='profile-deatils'>
                        <div className='profile-detail-name'>
                            <span className='primary-text'>
                                {" "}
                                Hello, I am <br /><h1 className='highlighed-text'> Harshada Shivaji Patil</h1>
                            </span>
                        </div>

                        <div className='profile-detail-role'>
                            <div className='profile-role-tagline'>
                                <h1>Frontend / React Developer </h1>
                            </div>
                            <span className='primary-text'>
                                {" "}
                                <h1>
                                    <Typical loop={Infinity}
                                        steps={
                                            [
                                                "Enthusiastic Dev",
                                                5000,
                                                "Full stack Developer",
                                                5000,
                                                "React Developer",
                                                5000,
                                                "UI Developer",
                                                5000,
                                            ]
                                        }
                                    />
                                </h1>
                                <span className='profile-role-tagline'>
                                    “I build responsive web apps and explore AI-driven solutions.”
                                </span>
                            </span>
                        </div>

                        <div className='profile-option'>
                            <a href={`${process.env.PUBLIC_URL}/Harshada.pdf`}
                                target="_blank"
                                rel="noopener noreferrer">
                                <button className='btn highlighted-btn'>Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className='profile-picture'>
                        <div className='profile-picture-background' style={{ backgroundImage: `url(${webImage})` }}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
