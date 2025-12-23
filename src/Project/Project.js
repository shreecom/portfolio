/*eslint-disable*/
import React from "react";
import './project.css';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import EditNoteIcon from '@mui/icons-material/EditNote';
const Project = () => {
    return (
        <>
            <div className="projects" id="project">

                <h1>MY PROJECT</h1>
                <p>Here are some of the projects I have worked on:</p>
                <div className="container2" >
                {/* <div className="row"> */}
                     <div className="row" data-aos="fade-right" data-aos-duration="2000"> 
                       <div className="col" >
                            <div className="card" >
                                <h5>Web Portal On Educational Institute</h5><hr />
                                <div className="card-body">
                                <HomeWorkIcon style={{fontSize:60}} className="projectIcon"/>
                                                   <p className="card-text">Front End : HTML5 , CSS3, JavaScript , Bootstrap </p>
                                    <p className="card-text">Back End : PHP, MySQL Server</p>

                                </div>
                            </div>
                        </div>

                        <div className="col" >
                            <div className="card" >
                                <h5>Ecommerce Website</h5><hr />
                                <div className="card-body">
                                <ShoppingCartIcon className="projectIcon" style={{fontSize:60}}/>
                                    <p className="card-text">Front End : HTML5 , CSS3, JavaScript , Bootstrap, React, Redux ,Routers ,API </p>
        
                                </div>
                            </div>
                        </div>

                       <div className="col" >
                            <div className="card" >
                                <h5>Social Netwoking Site</h5><hr/>
                                <div className="card-body">
                                <GroupsIcon className="projectIcon" style={{fontSize:60}}/>
                                    <p className="card-text">Front End :HTML5 , CSS3, React, Material UI,</p>
                                </div>
                            </div>
                        </div>
                        <div className="col" >
                            <div className="card" >
                                <h5>Job Seeker Portal</h5><hr />
                                <div className="card-body">
                                <WorkIcon className="projectIcon" style={{fontSize:60}}/>
                                    <p className="card-text">Front End : HTML5 , CSS3, JavaScript , Bootstrap </p>
                                </div>
                            </div>
                        </div>
                        <div className="col" >
                            <div className="card" >
                                <h5>ToDo List</h5><hr />
                                <div className="card-body">
                                <EditNoteIcon className="projectIcon" style={{fontSize:60}}/>
                                    <p className="card-text">Front End : React ,usestate,Tailwind CSS </p>
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