import React from 'react';
import { milehibooking, githublogo, soundideas, showgo, portfolio } from '../images/github';
//audiogo, showgo, pi server

function GitHub() {
  return (
    <div className={"General-container"}>
      <div className={"General-heading"}>
        <span>This Website, 2020</span><img className={"General-githubLogo"} src={githublogo} alt="github logo for port-2019"/><a href="https://github.com/stefems/port-2019">port-2019</a>
      </div>
      <div className={"General-paragraph"}>
        You're looking at it. It's a React web-app deployed to Heroku. Stefan used a React Slider <a href="https://tympanus.net/codrops/2019/08/20/react-slider-with-parallax-hover-effects/">tutorial</a> to build the home page's slider. He also built a React component to create the GitHub contribution <a href="https://codepen.io/steflawok/pen/PowMzwj">animation</a>, used Sketch to design the website (and having his name very loudly on display in the background), and used another <a href="https://tympanus.net/codrops/2017/12/21/css-glitch-effect/">tutorial</a> to create the css image glitch effect used in the Mirror photo.
      </div>
      <img src={portfolio} alt="portfolio" className={"General-githubImage"}/>
      
      <div className={"General-heading"}>
        <span>MileHiBooking, 2019</span><img className={"General-githubLogo"} src={githublogo} alt="github logo for milehibooking"/><a href="https://github.com/stefems/milehibooking">milehibooking</a>
      </div>
      <div className={"General-paragraph"}>
        This is a marketing website Stefan made for a friend that books concerts in Denver, Colorado. Uses a React web-app deployed to Heroku (using a web template because it took ten minutes.) Google domains DNS setup, email server also setup via Google Cloud.
      </div>
      <img src={milehibooking} alt="milehibooking" className={"General-githubImage"}/>
      
      <div className={"General-heading"}>
        <span>Sound Ideas, 2019</span><img className={"General-githubLogo"} src={githublogo} alt="github logo for sound ideas"/><a href="https://github.com/stefems/genmuse">genmuse</a>
      </div>
      <div className={"General-paragraph"}>
        Stefan likes to create audio-related programming projects, and Sound Ideas is the soon-to-be-released blog that features this content. The prototype is currently built in React. Each sound project will be configurable.
      </div>
      <img src={soundideas} alt="portfolio" className={"General-githubImage"}/>

      <div className={"General-heading"}>
        <span>ShowGo, 2018</span><img className={"General-githubLogo"} src={githublogo} alt="github logo for showgo"/><a href="https://github.com/stefems/showgoV2">showgoV2</a>
      </div>
      <div className={"General-paragraph"}>
        Stefan used the Facebook API, Angular 2, and Node JS to build a web-app for discovering and RSVP’ing to concerts. Supported integrated social components via the Facebook API and Facebook Event API, embedded Bandcamp streaming.
      </div>
      <img src={showgo} alt="portfolio" className={"General-githubImage"}/>

      <div className={"General-heading"}>
        <span>Audiotree, 2018</span><img className={"General-githubLogo"} src={githublogo} alt="github logo for audiotree"/><a href="https://github.com/stefems/nuxt_audiogo">nuxt_audiogo</a>
      </div>
      <div className={"General-paragraph"}>
        Used the Spotify API, Vue JS, Node JS, and Google Firebase to build a streaming wrapper that implemented a custom algorithm that suggested new and related music for users. Not to be confused with Spotify's Audiotree live sessions.
      </div>
      
    </div>
  );
}

export default GitHub;