import React from 'react';
import '../PageStyles/General.css';
import myface from '../images/myface.jpg';

function Professional() {
  return (
    <div className={"General-container"}>
      <div className={"General-pictureChunk"}>
        <div className={"General-pictureChunkTextContainer"}>
          <div className={"General-paragraph"}>
          <div style={{"display": "inline-flex"}}className={"General-heading"}>Stefan Kowal</div> is a software developer. He also does design, writing, and teaching. Stefan often partakes in strange coding projects related to music and miscellaneous artistic statements. His non-screen hobbies involve ceramics, bicycling, and reading.
          </div>
          <div className={"General-paragraph"}>
          Stefan got his Computer Science Degree from Centre College in 2015.
          </div>
          <div className={"General-paragraph"}>
          Stefan’s career (in reverse chronological time) is the following:
          </div>
        </div>
        <img src={myface} className={"General-pictureChunkImage"} alt="stefans face"/>
      </div>
      <div className={"General-paragraph"}>
        <div className={"General-heading"}>Software Engineer, MachineShop. 2018-2020</div>
        Led the design and development of the MachineShop EdgeIQ IoT Device Management Portal, made in React JS. Used the Google Material Design paradigm. Also wrote the UX and IoT whitepaper.
        <div>React JavaScript GoLang Docker Technical Writing AWS</div>
      </div>
      <div className={"General-paragraph"}>
        <div className={"General-heading"}>Teaching Associate, General Assembly. 2017-2018</div>
        Provided curriculum design and instruction for a full-stack web development course, lead community events, got excited while explaining linked-lists.
        <div>JavaScript Node Mongo Firebase Teaching</div>
      </div>
      <div className={"General-paragraph"}>
        <div className={"General-heading"}>Challenge Editor, HackerRank. 2017</div>
        Edited programming challenge descriptions for clarity and brevity. Wrote and edited challenge solution explanations, engaged community through forums to further explain solutions and approaches.
      </div>
      <div className={"General-paragraph"}>
        <div className={"General-heading"}>Software Engineer, CenturyLink. 2016</div>
        Utilized Java EE, Spring, and Hibernate to maintain the Century Link bill payment system.
      </div>
      <div className={"General-paragraph"}>
        <div className={"General-heading"}>Software Engineer, Tata Consultancy Services. 2015</div>
        Studied business process management. Led a team for Red Hat Consultant training. On the TCS GoIT learning committee.
      </div>
    </div>
  );
}

export default Professional;