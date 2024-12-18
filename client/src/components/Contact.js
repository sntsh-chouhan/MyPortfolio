import React from 'react';
import '../css/Contact.css';
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHub from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const Contact = ({ scrollTo, refs }) => {
    return ( 
        <div ref={refs.ContactMe} className='contact-root'>
            <h1>Contact Me</h1>
            <div className="underline"></div>
            <div className="contactcontent">
                <div className="ContactNote">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis temporas</p>
                    <div className="button">
                        <p href="" className='btn'><a href="https://drive.google.com/file/d/1t0Ar2B-XCLXfCM3YRHCclgLGyClHYalk/view?usp=sharing" style={{ color: "black", textDecoration: "none"}} target="_blank" >My Resume</a></p>
                    </div>
                </div>
                <div class="vl"></div>
                <div className="contactInfo">
                    <h2>Reach out to me on...</h2>
                    <a className ="contact-logo" href="https://github.com/sntsh-chouhan" rel="noreferrer" target="_blank"><GitHub/></a>
                    <a className ="contact-logo" href="http://linkedin.com/in/santosh94" rel="noreferrer" target="_blank"><LinkedInIcon/></a>
                    <a className ="contact-logo" href="https://www.instagram.com/sntsh._" rel="noreferrer" target="_blank"><InstagramIcon/></a>
                    <a className ="contact-logo" href="https://wa.me/917999907332" rel="noreferrer" target="_blank"><WhatsAppIcon/></a>
                    <div className="contactNo">
                        <p><a href="mailto: santosh.c0308@gmail.com">santosh.c0308@gmail.com</a></p>
                        <p><a href="mailto: santosh.chouhan@iitg.ac.in">santosh.chouhan@iitg.ac.in</a></p>
                        <p><a href="callto: +917999907332">+91 79999907332</a></p>
                            
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>&copy; 2024 Made by <a href="/">Santosh Chouhan</a></p>
            </div>
            
        </div>
     );
}
 
export default Contact;