import React from "react";
import '../css/AboutMe.css';
import IITG from '../assets/images/jpg/IIT_Guwahati_Logo.jpg';
import NSS from '../assets/images/jpg/NSS-symbol.jpg';
import GOA from '../assets/images/jpg/Assam-govt.jpg';

const AboutMe = ({ scrollTo, refs }) => {
    return ( 
        <div className="about-root" ref={refs.About}>
            <div className="aboutContent" >
                <div>
                    <h1>About me</h1>
                    <div className="underline"></div>
                </div>
                <div className="aboutEducation">
                    <div className="subheading">
                        <h1 >Education</h1>
                    </div>
                    <div className="educationblock">
                        <div className="aboutImg">
                            <img src={IITG} alt=""/>
                        </div>
                        <div className="aboutInfo">
                            <div className="institute">
                                <h2>Indian Institute of Technology, Guwahati</h2>
                                <samp>2021-present</samp>
                            </div>
                            <div className="instituteWork">
                                <p className="degree">Bachelor's Degree,</p>
                                <p>Civil Engineering</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="extracurricular">
                    <div className="subheading">
                        <h1>Beyond code</h1>
                    </div>
                    <div className="activity">
                        <div className="aboutImg">
                            <img src={NSS} alt="" />
                        </div>
                        <div className="aboutInfo">
                            <h2>NSS Cell, IIT Guwahati</h2>
                            <h4>Assosiation with NSS cell at IIT Guwahati as Unit cordinator</h4>
                            <p>my responsibility is to organise event in social servise and working on campagins to improve lives of people of addopted village under my unit</p>
                        </div>
                    </div>
                    <div className="activity">
                        <div className="aboutImg">
                            <img src={GOA} alt="" />
                        </div>
                        <div className="aboutInfo">
                            <h2>NSS Cell, IIT Guwahati</h2>
                            <h4>Assosiation with NSS cell at IIT Guwahati as Unit cordinator</h4>
                            <p>my responsibility is to organise event in social servise and working on campagins to improve lives of people of addopted village under my unit</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
};
export default AboutMe;