import React from 'react';
import './App.css';

//pages
import Splash from './pages/Splash';
import Skills from './pages/Skills';


function App() {
  return (
    <div className="App">
      {/* <div className="App-page1"> */}
        <Splash />
        <Skills />
      {/* </div> */}
    </div>
  );
}

export default App;