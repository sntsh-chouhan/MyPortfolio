import React from 'react';
import '../css/Skills.css';

const Skills = () => {
    return ( 
        <div className="skills-root">
            <div className="skillContent">
                <h1>Skills</h1>
                <div className="subSkill">
                    <h2>Web Development</h2>
                    <div className="subSkill-box">
                        <div className="skillName">HTML</div>
                        <div className="skillName">CSS</div>
                        <div className="skillName">Bootstrap</div>
                        <div className="skillName">NodeJS</div>
                        <div className="skillName">ExpressJS</div>
                        <div className="skillName">ReactJS</div>
                    </div>
                    
                </div>
                <div className="subSkill">
                    <h2>Languages</h2>
                    <div className="subSkill-box">
                        <div className="skillName">Javascript</div>
                        <div className="skillName">Python</div>
                        <div className="skillName">C</div>
                        <div className="skillName">C++</div>    
                    </div>
                    
                </div>
                <div className="subSkill">
                    <h2>Database Management</h2>
                    <div className="subSkill-box">
                        <div className="skillName">MySQL</div>
                        <div className="skillName">MongoDB</div>    
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Skills;