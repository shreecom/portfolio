/* eslint-disable*/
import React from 'react';
import Profile from './Profile';
import About from './About/About';
import Skill from './Skills/Skill';
import Project from '../Project/Project';
import Contact from '../contact/Contact';
// import Header from '../Header/Header';


export default function Home() {
  return (
    <div className='home-container' id='Home'>
      {/* <Header/> */}
       <Profile/>
      <About />
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  );
};
