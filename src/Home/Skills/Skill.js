/*eslint-disable*/
import React from "react";
import skills from './skills.json';
import './skill.css';

const Skill =()=>{
    return(
        <>
            
            <div className="container skills" id="skills">
                <h1>Skills</h1>

                <div className="items" >
                {skills.map((data)=>(
                    <>
                        
                            <div className="item" key={data.id} data-aos="flip-left" data-aos-duration="1000">
                                <img src={`/componet/${data.imageSrc}`} />
                                <h3>{data.title}</h3>
                            </div>
                        
                    </>
                ))}
                </div>
            </div>
        </>
    )
}
export default Skill;