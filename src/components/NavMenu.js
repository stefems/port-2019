import React from 'react';
import {
  NavLink
} from "react-router-dom";
import './NavMenu.css';

function NavMenu() {
  const routes = [
    {display: "Home", path: "/home"},
    {display: "Professional", path: "/professional"},
    {display: "GitHub", path: "/github"},
    {display: "Design", path: "/design"},
    {display: "Writing", path: "/writing"},
    {display: "Mirror", path: "/mirror"},
    {display: "Sound Ideas", path: "/sound_ideas"},
  ];
  return (
    <div className={"NavMenu-linkContainer"}>
        {routes.map( ({path, display}) => 
            (<NavLink
                key={path}
                to={path}
                activeStyle={{
                  textDecoration: "line-through"
                }}
            >
              {display}
            </NavLink>)
          )}
    </div>
  );
}

export default NavMenu;