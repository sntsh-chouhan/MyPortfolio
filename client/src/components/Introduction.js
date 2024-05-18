import React from 'react';
import '../css/Introduction.css';

const Introduction = ({ scrollTo, refs }) => {
    return ( 
        <div className="intro" id='home' ref={refs.Home}>
            <div className="introBox">
                <div className="content">
                    <h1>HEY, I'M SANTOSH CHOUHAN</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis tempora explicabo quae quod deserunt eius sapiente solutions for complex problems</p>
                </div>
                <div className="button">
                    <p onClick={() => scrollTo(refs.Project)} className='btn'>PROJECTS</p>
                </div>
                
            </div>
        </div>
     );
}
 
export default Introduction;