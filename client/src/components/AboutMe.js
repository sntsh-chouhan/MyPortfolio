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
                            <p>Led Community service projects within NSS and beyond, fostering a collaborative environment, resulting in successful
                            initiatives and a positive community impact in education, awareness and cleanliness.</p>
                            <p>Directed a group of 1000+ volunteers and coordinated with a team of 20+ members including faculty of IIT Guwahati.</p>
                        </div>
                    </div>
                    <div className="activity">
                        <div className="aboutImg">
                            <img src={GOA} alt="" />
                        </div>
                        <div className="aboutInfo">
                            <h2>Samagra Shiksha Assam</h2>
                            <h4>Student Mentor</h4>
                            <p> was responsible in the implementation of Tinkering Lab, a Rashtriya Avishkar Abhiyan (RAA) project, which aims to provide education to school students about emerging technology in fields of electronics, Robotics, AI/ML etc. </p>
                            <p>During course of tenure, I was responsible of a class of students insuring they understand all the concepts and gave them hands own experience on Robotics, ML, etc. and build multitude of projects explaining same.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
};
export default AboutMe;