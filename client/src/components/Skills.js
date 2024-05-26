import React from 'react';
import '../css/Skills.css';
import { SkillList } from '../data/skillList';

const Skills =({ scrollTo, refs }) => {
    
    return ( 
        <div className="skills-root" id='skill' ref={refs.Skill}>
            <div className="skillContent">
                <h1>Skills</h1>
                <div className="underline"></div>
                {SkillList.map((SkillHead)=>(
                        <div className="subSkill">
                            <h2>{SkillHead.feild}</h2>
                            <div className="subSkill-box">
                                {SkillHead.skills.map((skillName, idx) => (
                                        <div className="skillName" key={idx}>{skillName}</div>
                                    ))}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
     );
};
 
export default Skills;