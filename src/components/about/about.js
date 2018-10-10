
import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
              <div className="row">
                <div className="three columns">
                  <img className="profile-pic" src="https://res.cloudinary.com/dx34xrygi/image/upload/v1538576326/Andre.jpg" alt="Andre Santiago" />
                </div>
                <div className="nine columns main-col">
                  <h2>About Me</h2>
                  <p>{"Born in NYC, but raised split between the Big Apple and Puerto Rico. Formerly a Senior Network Engineer & Incident Manager with over 5 years of experience IT. I transitioned back into the field of Development out of my love for creation and design. I'm now am currently pursuing opportunities in the field."}
                  </p>
                  <div className="row">
                    <div className="columns contact-details">
                      <h2>Contact Details</h2>
                      <p className="address">
                        <span>Andre Santiago</span><br />
                        <span><a href="https://github.com/runandrerun">Github</a></span><br />
                        <span>the.asantiagojr@gmail.com</span><br />
                        <span><a href="https://runandrerun.github.io">Portfolio</a></span>
                      </p>
                    </div>
                    <div className="columns download">
                      <p>
                        <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      </React.Fragment>
    );
  }
}
