import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//pages
import { Home, Professional, GitHub, Writing, Mirror, Muse, Design } from './pages';
import ContentWrapper from './components/ContentWrapper';


function App() {
  const homes = [
    {component: <Home />, path: "/home"},
    {component: <Home />, path: "/"},
  ];
  const routes = [
    {component: <Professional />, path: "/professional"},
    {component: <GitHub />, path: "/github"},
    {component: <Design />, path: "/design"},
    {component: <Writing />, path: "/writing"},
    {component: <Mirror />, path: "/mirror"}, 
    {component: <Muse />, path: "/sound_ideas"},
  ];
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map( ({path, component}) => 
            (<Route key={path} path={path}>
              <ContentWrapper content={component}/>
            </Route>)
          )}
          {homes.map( ({path, component}) => 
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