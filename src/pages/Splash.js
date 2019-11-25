import React from 'react';
import { Media } from 'react-breakpoints';
import port_bg_circle from './../port_bg_circle.png';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './../App.css';

class Splash extends React.Component {
  render() {
    return (
      <Media>
        { ({ breakpoints, currentBreakpoint }) => {
          const size = (breakpoints[currentBreakpoint] - breakpoints[currentBreakpoint]/4) + "px";
          const img_class = breakpoints[currentBreakpoint] >= 1024 ? "App-face" : "App-faceResponsive";
          const name_class = breakpoints[currentBreakpoint] >= 1024 ? "App-name" : "App-name App-nameResponsive";
          const text_class = breakpoints[currentBreakpoint] >= 1024 ? "App-mainText" : "App-mainText App-textResponsive"
          const hide_scroll = breakpoints[currentBreakpoint] < 1024 ? "hidden" : "visible";
          return (
            <div className="App-splashContainer">
              <img style={{width: size, height: size, minWidth: size, minHeight: size}} src={port_bg_circle} className={img_class} alt="background" />
              <div className={text_class}>
                <div className="App-text App-first">developer</div>
                <div className="App-text App-second">designer</div>
                <div className="App-text App-third">writer</div>
                <div className="App-text App-fourth">teacher</div>
              </div>
              <div className={name_class}>
                i'm stefan kowal
              </div>
              <div style={{visibility: hide_scroll}} className="App-scroll">
                scroll
                <ArrowDownwardIcon />
              </div>
            </div>
          )
        }}
      </Media>
    )
  }
}
 
export default Splash;