import React, { Component } from 'react';


export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">

      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>{"Flatiron School x WeWork's Access Labs"}</h3>
              <p className="info">Software Engineer Immersive <span>•</span> <em className="date">October 2018</em></p>
              <p>
                {/*"An initiative by Flatiron School x WeWork to provide opportunities to underrepresented demographics. This is a 15 week course in which students learn React, Redux, Ruby on Rails, and JavaScript."*/}
              </p>
            </div>
          </div>
          <div className="row item">
            <div className="twelve columns">
              <h3>Per Scholas</h3>
              <p className="info">Network Engineer Intensive {" | "} Cisco Certified Network Associate <span>•</span> <em className="date">June 2013</em></p>
              <p>
                {/*"Per Scholas partnered with Borough of Manhattan Community College to provide an intensive for Network Engineering. "*/}
              </p>
            </div>
          </div>
          <div className="row item">
            <div className="twelve columns">
              <h3>ASA College</h3>
              <p className="info">Computer Science<span>•</span> <em className="date">June 2012</em></p>
              <p>
                {/*"Earned a Computer Science degree."*/}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>Alphaserve Technologies</h3>
              <p className="info">Incident Manager {" | "} Senior Network Engineer  <span>•</span> <em className="date">August 2015 - May 2018</em></p>
              <p>
              + Performed risk assessment for change controls: advise, approve, and schedule
              + Triaged for high priority issues by providing Network, Systems, or UC support
              + Provided Root Cause Analysis of high level issues
              + Performed audits on Network equipment to ensure secure infrastructures
              + Trained new hires at satellite offices to ensure efficient acclimation to the environment and tools
              + Assisted in client facing meetings to ensure service needs are met
              </p>
            </div>
          </div> {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>Alphaserve Technologies</h3>
              <p className="info">Network Engineer <span>•</span> <em className="date">August 2013 - August 2015</em></p>
              <p>
              + Monitored and maintained integrity of client Network infrastructures
              + Performed administrative duties on Palo Alto and Cisco Firewalls
              + Provided risk assessments for Network related change controls
              + Performed upgrades on Network devices; including, but not limited to software (OS) and hardware
              + Traveled onsite to install/uninstall hardware
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="bars">
            <ul className="skills">
              <img className="skill-resize" src="https://res.cloudinary.com/dx34xrygi/image/upload/v1539197902/React.js_logo-512.png"/> {"  "}
              <img className="large-resize" src="https://res.cloudinary.com/dx34xrygi/image/upload/v1539198132/Redux.png"/>{"  "}
              <img className="large-resize" src="https://res.cloudinary.com/dx34xrygi/image/upload/v1539198517/rubydev.png"/>{"  "}
              <img className="skill-resize" src="https://res.cloudinary.com/dx34xrygi/image/upload/v1539198504/ruby-vector-rails-logo-2.png"/>{"  "}

            </ul>
          </div>{/* end skill-bars */}
        </div> {/* main-col end */}
      </div> {/* End skills */}
    </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}

// <li><span className="bar-expand" /><em>React</em></li>
// <li><span className="bar-expand illustrator" /><em>Redux</em></li>
// <li><span className="bar-expand wordpress" /><em>JavaScript</em></li>
// <li><span className="bar-expand css" /><em>Ruby</em></li>
// <li><span className="bar-expand html5" /><em>Ruby on Rails</em></li>
// <li><span className="bar-expand jquery" /><em>HTML5</em></li>
// <li><span className="bar-expand jquery" /><em>CSS</em></li>
