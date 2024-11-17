import React from "react";
import './Header.css';
const Header = () => {
    return (
        <>
            <div className="header-con">
                <div className="nav">
                    <ul>
                        <li><a href="#home"> Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li> <a href="#project">Project</a></li>
                        <li><a href="#contact">Contact</a></li>

                    </ul>
                </div>

            </div>
        </>
    );
}
export default Header;