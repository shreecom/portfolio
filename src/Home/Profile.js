/*eslint-disable*/
import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";
import webImage from '../asset/web.png';
export default function Profile() {
    return (
        <>
            <div className='profile-container' data-aos="fade-down" data-aos-duration="1000">
                <div className='profile-parent'>
                    <div className='profile-deatils'>
                        <div className='colz'>
                            <div className='colz-icon'>
                                <a href='#'>
                                    <i class="bi bi-linkedin"></i>
                                </a>
                                <a href='#'>
                                    <i class="bi bi-whatsapp"></i>
                                </a>
                                <a href='#'>
                                    <i class="bi bi-instagram"></i>
                                </a>
                                <a href='#'>
                                    <i class="bi bi-envelope"></i>
                                </a>
                            </div>
                        </div>

                        <div className='profile-detail-name'>
                            <span className='primary-text'>
                                {" "}
                                Hello, I am <span className='highlighed-text'> Harshada Shivaji Patil</span>
                            </span>
                        </div>

                        <div className='profile-detail-role'>
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
                                    knack of building application with front back end operation
                                </span>
                            </span>
                        </div>

                        <div className='profile-option'>
                            <button className='btn primary-btn'>{""} Hire Me {" "}</button>
                            <a href='newResume.pdf' download={'newResume.pdf'}>
                                <button className='btn highlighted-btn'>get resume</button>
                            </a>
                        </div>
                        </div>
                        <div className='profile-picture'>
                            <div className='profile-picture-background' style={{backgroundImage: `url(${webImage})`}}>

                            </div>
                        </div>
                    </div>
                </div>
           
        </>
    )
}
