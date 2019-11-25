import React from 'react';
import { Media } from 'react-breakpoints';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import CodeIcon from '@material-ui/icons/Code';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import RateReviewIcon from '@material-ui/icons/RateReview';

import './../App.css';
import SimplePopover from '../SimplePopover';

class Skills extends React.Component {

    show_email = () => {
        console.log("test")
    }

  render() {
    return (
      <Media>
        { ({ breakpoints, currentBreakpoint }) => {
          const underline_class = breakpoints[currentBreakpoint] >= 1024 ? "App-skillUnderline" : "App-skillUnderline App-skillUnderlineResponsive";
          const skill_class = breakpoints[currentBreakpoint] >= 1024 ? "App-skill" : "App-skill App-skillResponsive";
          const content_class = breakpoints[currentBreakpoint] >= 1024 ? "App-skillContent" : "App-skillContent App-skillContentResponsive";
          return (
            <div className="App-skillsContainer">
              <div className="App-skillsTop">
                <div className={skill_class + " App-right"}>
                     <div className="App-skillRow">
                        <CodeIcon className="App-skillIcon"/>
                        <span className="App-skillText">Development</span>
                    </div>
                    <span style={{width: "200px"}} className={underline_class}>&nbsp;</span>
                    <div className="App-skillContent">
                        <ul>
                            <li>Lead Front-End Developer at MachineShop: Angular, React, Golang, Shippable. 3 years</li>
                            <li>Software Engineer, Century Link: Java EE, Spring, Hibernate. 1 year.</li>
                        </ul>
                    </div>
                </div>
                <div className={skill_class + " App-middle"}>
                    <div className="App-skillRow">
                        <DeveloperBoardIcon className="App-skillIcon"/>
                        <span className="App-skillText">Design</span>
                    </div>
                    <span style={{width: "122px"}} className={underline_class}>&nbsp;</span>
                    <div className="App-skillContent">
                        <ul>
                            <li>Lead Designer at MachineShop: Sketch. 3 years</li>
                        </ul>
                    </div>
                </div>
                <div className={skill_class + " App-left"}>
                    <div className="App-skillRow">
                        <RecordVoiceOverIcon className="App-skillIcon"/>
                        <span className="App-skillText">Teaching</span>
                    </div>
                    <span style={{width: "120px"}} className={underline_class}>&nbsp;</span>
                    <div className="App-skillContent">
                        <ul>
                            <li>Teaching Associate, General Assembly: curriculum creation, teaching. 1 year.</li>
                        </ul>
                    </div>
                </div>
              </div>
              <div className="App-skillsBottom">
                 <div className={skill_class + " App-left"}>
                    <div className="App-skillRow">
                        <RateReviewIcon className="App-skillIcon"/>
                        <span className="App-skillText">Writing</span>
                    </div>
                    <span style={{width: "120px"}} className={underline_class}>&nbsp;</span>
                    <div className="App-skillContent">
                        <ul>
                            <li>UX and IoT Whitepaper, Documentation, MachineShop, 2 years</li>
                            <li>HackerRank Problem Editor, HackerRank, 1 year.</li>
                        </ul>
                    </div>
                </div>
                <div className={skill_class + " App-middle"}>
                    <div className="App-skillRow">
                        <LoyaltyIcon className="App-skillIcon"/>
                        <span className="App-skillText">Misc.</span>
                    </div>
                    <span style={{width: "90px"}} className={underline_class}>&nbsp;</span>
                    <div className="App-skillContent">
                        <ul>
                            <li>Convert Discovery App, ShowGo, Angular 2, Facebook Event API.</li>
                            <li>Music Discovery App, AudioTree, Vue JS, Spotify API.</li>
                            <li>Music Discovery Twitter Bot, @thebandbot, Node JS, Webscraping.</li>
                            <li>Ceramic Artist, 2 years.</li>
                            <li>Procedural Music App, JS.</li>
                        </ul>
                    </div>
                </div>
              </div>
              <div className="App-contact">
                <div>Let’s <SimplePopover></SimplePopover></div>
                <div>(Especially if your company is involved with education, music, or digital art)</div>
              </div>
            </div>
          )
        }}
      </Media>
    )
  }
}
 
export default Skills;