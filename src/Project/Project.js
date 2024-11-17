/*eslint-disable*/
import React from "react";
import './project.css';
const Project = () => {
    return (
        <>
            <div className="container1 projects my-3" id="project">

                <h1>Project</h1>

                <div className="container2 text-center" >
                    <div className="row" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="col" >
                            <div className="card" >
                                <img src="componet\hs2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Project Name: Hospital Management System</p>
                                    <p className="card-text">Front End : c# </p>
                                    <p className="card-text">Back End : Sql server</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="componet\shree_logo.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Project Name : Web Project for Shree Computers Academy</p>
                                    <p className="card-text">Front End: HTML CSS JavaScript</p>
                                    <p className="card-text">Back End : PHP , MySql server</p>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
             </div>
        </>
    )
}
export default Project;