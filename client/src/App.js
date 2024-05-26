import {BrowserRouter} from 'react-router-dom';
import React, { useRef } from 'react';

import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
// import ProjectDetails from './components/ProjectDetails';


const App = () => {
    const Home= useRef(null);
    const Skill = useRef(null);
    const Project = useRef(null);
    const About = useRef(null);
    const ContactMe = useRef(null);

    const scrollToComponent = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const refs = { Home, Skill, Project, About, ContactMe };
    
    return (
        <BrowserRouter>
            <Navigation scrollTo={scrollToComponent} refs={refs}/>
            <Introduction scrollTo={scrollToComponent} refs={refs}/>
            <Skills scrollTo={scrollToComponent} refs={refs}/>
            <Projects scrollTo={scrollToComponent} refs={refs}/>
            <AboutMe scrollTo={scrollToComponent} refs={refs}/>
            <Contact scrollTo={scrollToComponent} refs={refs}/>
        </BrowserRouter>
  );
}

export default App;
