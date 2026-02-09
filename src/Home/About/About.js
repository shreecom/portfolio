import React from 'react';
import './about.css';
import SchoolIcon from '@mui/icons-material/School';
export default function About() {
  return (
    <>

      <div className='about-container' id='about'>
        <h1>ABOUT ME</h1>
        <div className='inner' >
          {/* <div className='about-information'> */}
          <div className='about-information' data-aos="fade-right" data-aos-duration="1000">
            <p>I am an MCA student passionate about web development . I specialize in creating responsive, user-friendly web applications using React.js, Redux Toolkit, and APIs. I enjoy learning new technologies and applying them to build efficient and scalable solutions.and I have hands-on experience with API integration and modern frontend tools.
            </p>
            <p>I am continuously learning new technologies and improving my problem-solving skills by working on real-world projects. My goal is to grow as a software developer and contribute to impactful, technology-driven solutions.</p>
          </div>

          <div className='educaionDetails'> 
          
          <eduation>
            <div className='eduation' data-aos="fade-up" data-aos-duration="1000">
              <div className='educationHead'><h3>Education</h3> <SchoolIcon style={{ fontSize: 50 }} /></div>
              <div>
                <div className='degree1  coursename'>MCA </div>
                <div className='degree2 coursename'>BCA</div>
                <div className='degree3 coursename'>HSC </div>
                <div className='degree4 coursename'>SSC</div>
              </div>
            </div>
          </eduation>
          <div className='keyHighlight' data-aos="fade-left" data-aos-duration="1000">
            <h3>key Highlights</h3>
            <ul>
              <li>Full stack web development</li>
              <li>inetractive front end as per design</li>
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
