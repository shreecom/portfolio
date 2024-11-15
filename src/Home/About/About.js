import React from 'react';
import './about.css';
export default function About() {
  return (
    <>
    
    <div className='about-container'>
    <h2>About Me</h2>
    <div className='inner' >   
      <div className='about-information' data-aos="fade-right" data-aos-duration="1000">
        <p>I am a passionate web designer with a keen eye for aesthetics and a strong foundation in user experience. I thrive on transforming ideas into visually appealing digital experiences. My expertise in HTML, CSS, and JavaScript, React combined with a solid understanding of design principles, allows me to create intuitive and user-friendly interfaces.
        </p>
      </div>
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
    </>
  )

}
