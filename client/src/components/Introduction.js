import React ,{useState,useEffect} from 'react';
import '../css/Introduction.css';

const Introduction = ({ scrollTo, refs }) => {
    return ( 
        <div className="intro" id='home' ref={refs.Home}>
            <div className="introBox">
                <div className="content">
                    <h1>HEY, I'M SANTOSH CHOUHAN</h1>
                    <p>Hello! I'm a student currently pursuing a degree in Civil Engineering at IIT Guwahati. While my academic focus is in Civil Engineering, my true passion lies in technology. I am particularly enthusiastic about full-stack development and competitive programming. I started coding in my first year of university and discovered web development during my sophomore year while participating in various events. Since then, I have been dedicated to honing my skills in creating seamless and innovative digital experiences and solving challenging problems.</p>
                    <p>Beyond technology, I have a variety of interests that keep me engaged and balanced. I’m passionate about fitness, biomechanics, and physiotherapy. To stay active and happy, I enjoy working out, propagating plants and trees, and spending quality time with friends.</p>
                </div>
                <div className="button">
                    <p onClick={() => scrollTo(refs.Project)} className='btn'>PROJECTS</p>
                </div>
                
            </div>
        </div>
     );
}
 
export default Introduction;