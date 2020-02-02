import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//pages
import { Home, Professional, GitHub, Writing, Mirror, Muse, Design } from './pages';


function App() {
  const routes = [
    {component: <Home />, path: "/home"},
    {component: <Professional />, path: "/professional"},
    {component: <GitHub />, path: "/github"},
    {component: <Design />, path: "/design"},
    {component: <Writing />, path: "/writing"},
    {component: <Mirror />, path: "/mirror"}, 
    {component: <Muse />, path: "/sound_ideas"},
    {component: <Home />, path: "/"},
  ];
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map( ({path, component}) => 
            (<Route key={path} path={path}>
              {component}
            </Route>)
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;