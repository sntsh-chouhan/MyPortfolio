import '../css/Navigation.css';
import React, { useState, useEffect } from 'react';
// import { useState, useRef } from "react";

const Navigation = ({ scrollTo, refs }) => {
    
    const [bgOpacity, setBgOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setBgOpacity(0);
            } else {
                setBgOpacity(1);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return ( 
        <div className="navbar" style={{ backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`}}>
            <nav className="navbar-content">
                <h1>Santosh Chouhan</h1>
                <div className="links">
                    <p onClick={() => scrollTo(refs.Home)}>Home</p>
                    <p onClick={() => scrollTo(refs.Skill)}>Skills</p>
                    <p onClick={() => scrollTo(refs.Project)}>Projects</p>
                    <p onClick={() => scrollTo(refs.About)}>About</p>
                    <p onClick={() => scrollTo(refs.ContactMe)}>Contact me</p>
                </div>
            </nav>
        </div>
        
     );
};
 
export default Navigation;