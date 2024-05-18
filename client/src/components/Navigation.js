import '../css/Navigation.css';
import React from 'react';
// import { useState, useRef } from "react";

const Navigation = ({ scrollTo, refs }) => {
    
    return ( 
        <div className="navbar">
            <nav className="navbar-content">
            <h1>Santosh Chouhan</h1>
                <div className="links">
                    {/* <a href="#home">Home</a>
                    <a href="#skill">Skils</a>
                    <a href="#project">Projects</a>
                    <a href="#contact">Contact me</a> */}
                    <p onClick={() => scrollTo(refs.Home)}>Home</p>
                    <p onClick={() => scrollTo(refs.Skill)}>Skills</p>
                    <p onClick={() => scrollTo(refs.Project)}>Projects</p>
                    <p onClick={() => scrollTo(refs.Experience)}>Experience</p>
                    <p onClick={() => scrollTo(refs.Contact)}>Contact me</p>
                </div>
            </nav>
        </div>
        
     );
};
 
export default Navigation;