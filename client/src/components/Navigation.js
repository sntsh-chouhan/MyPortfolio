import '../css/Navigation.css';
import React from 'react'

const Navigation = () => {
    return ( 
        <div class="navbar">
            <nav class="navbar-content">
            <h1>Santosh Chouhan</h1>
                <div className="links">
                    <a href="./">Home</a>
                    <a href="./">Skils</a>
                    <a href="./">Projects</a>
                    <a href="./">Contact me</a>
                </div>
            </nav>
        </div>
        
     );
}
 
export default Navigation;