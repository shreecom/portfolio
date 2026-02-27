/*eslint-disable*/
import React from "react";
import skills from './skills.json';
import './skill.css';

const Skill =()=>{
    return(
        <>        
            <div className="skills" id="skills" data-aos="zoom-in" data-aos-duration="1300">
                <h3> TECHNICAL SKILLS</h3>

                <div className="items" >
                {skills.map((data)=>(
                    <>
                    {/* <div className="item" key={data.id}> */}
                            <div className="item" key={data.id}> 
                                <img src={data.imageSrc} />
                                <h6>{data.title}</h6>
                            </div>
                    </>
                ))}
                </div>
            </div>
        </>
    )
}
export default Skill;