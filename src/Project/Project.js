/*eslint-disable*/
import React from "react";
import './project.css';

const Project = () => {
    return (
        <>
            <div className="container1 projects my-3" id="project">

                <h1>My Projects</h1>
                <p>Here are some of the projects I have worked on:</p>
                <div className="container2 text-center" >
                <div className="row">
                    {/* <div className="row" data-aos="fade-right" data-aos-duration="2000"> */}
                       <div className="col" >
                            <div className="card" >
                                <h5>Web Portal On shree Computers Academy</h5><hr />
                                <div className="card-body">
                                                   <p className="card-text">Front End : HTML5 , CSS3, JavaScript , Bootstrap </p>
                                    <p className="card-text">Back End : PHP, MySQL Server</p>

                                </div>
                            </div>
                        </div>

                        <div className="col" >
                            <div className="card" >
                                <h5>Ecommerce Website</h5><hr />
                                <div className="card-body">
                                    <p className="card-text">Front End : HTML5 , CSS3, JavaScript , Bootstrap, React, Redux ,Routers ,API </p>
                                    <p className="card-text">Back End : PHP, MySQL Server</p>
                                </div>
                            </div>
                        </div>


                        <div className="col" >
                            <div className="card" >
                                <h5>Social Netwoking Site</h5><hr />
                                <div className="card-body">
                                    <p className="card-text">Front End :HTML5 , CSS3, React, Material UI,</p>
                                    <p className="card-text">Back End : PHP, MySQL Server</p>

                                </div>
                            </div>
                        </div>

                        <div className="col" >
                            <div className="card" >
                                <h5>Hospital Management System</h5>
                                <hr />
                                <div className="card-body">
                                    <p className="card-text">Front End : c# </p>
                                    <p className="card-text">Back End : Sql server</p>
                                </div>
                            </div>
                        </div>

                        <div className="col" >
                            <div className="card" >
                                <h5>Job Seeker Portal</h5><hr />
                                <div className="card-body">
                                    <p className="card-text">Front End : HTML5 , CSS3, JavaScript , Bootstrap </p>
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