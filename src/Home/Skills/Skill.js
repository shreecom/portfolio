/*eslint-disable*/
import React from "react";
import skills from './skills.json';
import './skill.css';

const Skill =()=>{
    return(
        <>        
            <div className="skills" id="skills">
                <h1> TECHNICAL SKILLS</h1>

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