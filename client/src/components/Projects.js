import React from 'react';
import '../css/Projects.css';
import { ProjectList } from '../data/projectList';
import ProjectDetails from './ProjectDetails';


const Projects =({ scrollTo, refs }) => {
    
    return ( 
        <div className="projects-root" id='project' ref={refs.Project}>
            <div className="projectContent">
                <h1>Projects</h1>
                <div className="underline"></div>
                <div className="subProject">
                    {ProjectList.map((project)=>{
                        return(
                            <ProjectDetails project={project}/>
                        );
                    })}
                    
                </div>
            </div>
        </div>
     );
};
 
export default Projects;