/*eslint-enable*/
import React from "react";
import './Contact.css';
import { BiLogoGmail } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const Contact =()=>{
    return(
        <>
            <div id="contact">
                <h1> Contact Me</h1>
                <div className="contact-icon">
            {/* <div className="contact-icon" data-aos="fade-down-right" data-aos-duration="1000"> */}
                    <a href="mailto:harshadaspatil1999@gmail.com" className="item">
                        <BiLogoGmail className="icons" />
                    </a>
                    <a href="tel:919922781801" className="item">
                        <IoCall className="icons"/>
                    </a>
                    <a href="https://www.linkedin.com/in/harshada-patil-881a3b1b3" className="item">
                     <FaLinkedin className="icons"/>
                    </a> 
            </div>
            </div>
        </>
    )
}
export default Contact;