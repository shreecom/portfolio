import React from 'react';
import './about.css';
import SchoolIcon from '@mui/icons-material/School';
export default function About() {
  return (
    <>

      <div className='about-container' id='about' data-aos="fade-right" data-aos-duration="3000">
        <h3>ABOUT ME</h3>
        <div className='inner' >
          {/* <div className='about-information'> */}
          <div className='about-information'>
            <p>I am an MCA student passionate about web development . I specialize in creating responsive, user-friendly web applications using React.js, Redux Toolkit, and APIs. I enjoy learning new technologies and applying them to build efficient and scalable solutions.and I have hands-on experience with API integration and modern frontend tools.
            </p>
            <p>I am continuously learning new technologies and improving my problem-solving skills by working on real-world projects. My goal is to grow as a software developer and contribute to impactful, technology-driven solutions.</p>
          </div>

          <div className='educaionDetails'> 
          
          <eduation>
            <div className='eduation' >
              <div className='educationHead'><h4>Education</h4> <SchoolIcon style={{ fontSize: 50, color:"darkblue"}} /></div>
              <div>
                <div className='coursename'>MCA (Master of Computer Applications) </div>
                <div className='coursename'>BCA (Bachelor of Computer Applications)</div>
              </div>
            </div>
          </eduation>
          <div className='keyHighlight' >
            <h4>key Highlights</h4>
            <ul>
              <li>Full stack web development</li>
              <li>Managing databases</li>
              <li>Colaboration  & comminication skills</li>
              <li>Continuous learning mindset</li>
              <li> Responsive & adaptive design</li>
            </ul>
          </div>
</div>
        </div>
      </div>
    </>
  )

}
