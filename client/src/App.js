import {BrowserRouter} from 'react-router-dom';
import React from 'react';

import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import Skills from './components/Skills';

// import 

function App() {
  return (
    <BrowserRouter>
        <Navigation />
        <Introduction />
        <Skills />
    </BrowserRouter>
    
    // <Router>
    //     <div className="App">

    //     </div>
    // </Router>
    
  );
}

export default App;
