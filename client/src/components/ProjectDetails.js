import React, { useState } from 'react';
import '../css/Projects.css';
import GitHubIcon from "../assets/images/png/GitHub.png";

const ProjectDetails = ({project}) => {

    const [show, setShow] = useState(false);

    const showModal = () => {
      setShow(true);
    };
  
    const hideModal = () => {
      setShow(false);
    };
  
    const handleClickOutside = (e) => {
      if (e.target.className.includes('modal display-block')) {
        hideModal();
      }
    };
    
    return ( 
        <div className="projectDetails">
            <div className="projectImage">
                <img src={project.image} alt=""  />
            <div className="projectInfo">
                <h2>{project.name}</h2>
                <p className="projectInformation">{project.details}</p>
                <div className="button" onClick={showModal}>
                    <p className='btn'>More Information</p>
                </div>
                <div className={show ? "modal display-block" : "modal display-none"} onClick={handleClickOutside}>
                    <div className="modal-main">
                        <button className="close-button" onClick={hideModal}>×</button>
                        <div className="modalcontent">
                            <h2>{project.name}</h2>
                            <img className="modalImg" src={project.image} alt="" />
                            <p>{project.details}</p>
                            <div className="subSkill-box inskill">
                                {project.skills.map((skill, idx) => (
                                    <div className="skillName" key={idx}>{skill}</div>
                                ))}
                            </div>
                            <div className="imageWrapper">
                                <a href={project.link} rel="noreferrer" target="_blank" className="imageLink">
                                    <img src={GitHubIcon} alt="" className="modalImg linkImg"/>
                                </a> 
                            </div>
                              
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default ProjectDetails;