import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="portfolio">
<div className="row">
  <div className="twelve columns collapsed">
    <h1>Please check out some of my work!</h1>
    {/* portfolio-wrapper */}
    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
      <div className="columns portfolio-item">
        <div className="item-wrap">
          <a href="#modal-01" title>
            <img alt="Pawticulars" src="https://res.cloudinary.com/dx34xrygi/image/upload/v1539192817/pawticulars.png" />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>Pawticulars</h5>
                <p>Full Stack Web Application</p>
              </div>
            </div>
            <div className="link-icon"><i className="icon-plus" /></div>
          </a>
        </div>
      </div> {/* item end */}
      <div className="columns portfolio-item">
        <div className="item-wrap">
          <a href="#modal-02" title>
            <img alt src="https://res.cloudinary.com/dx34xrygi/image/upload/v1539192802/Flatiron-Chatterbox.png" />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>Flatiron Chatterbox</h5>
                <p>Full Stack Web Development</p>
              </div>
            </div>
            <div className="link-icon"><i className="icon-plus" /></div>
          </a>
        </div>
      </div> {/* item end */}
      <div className="columns portfolio-item">
        <div className="item-wrap">
          <a href="#modal-03" title>
            <img alt src="https://res.cloudinary.com/dx34xrygi/image/upload/v1539198884/Screen_Shot_2018-10-10_at_3.14.09_PM.png" />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>Portfolio</h5>
                <p>Web Development</p>
              </div>
            </div>
            <div className="link-icon"><i className="icon-plus" /></div>
          </a>
        </div>
      </div> {/* item end */}
    </div> {/* portfolio-wrapper end */}

  </div>
  <div id="modal-01" className="popup-modal mfp-hide">
    <img className="scale-with-grid" src="https://res.cloudinary.com/dx34xrygi/image/upload/v1539192817/pawticulars.png" alt />
    <div className="description-box">
      <h4>Pawticulars</h4>
      <p>{"NYC based doggy playdate matchmaker. Created with React, Redux + Thunk, Material-UI, and Ruby on Rails (API)."}</p>
      <span className="categories"><i className="fa fa-tag" />React, Redux, Thunk, Material-UI, Ruby on Rails</span>
    </div>
    <div className="link-box">
      <a href="https://github.com/runandrerun/pawticulars_frontend">Frontend</a>
      {" |  "}
      <a href="https://github.com/runandrerun/pawticulars-backend-api">Backend</a>
      <a className="popup-modal-dismiss">Close</a>
    </div>
  </div>{/* modal-01 End */}
  <div id="modal-02" className="popup-modal mfp-hide">
    <img className="scale-with-grid" src="https://res.cloudinary.com/dx34xrygi/image/upload/v1539192802/Flatiron-Chatterbox.png" alt />
    <div className="description-box">
      <h4>Flatiron Chatterbox</h4>
      <p>{"An interative online chatroom with a twist! Created with pure vanilla JavaScript, Ruby on Rails (API), Websockets, ActionCable, and Bootstrap."}</p>
      <span className="categories"><i className="fa fa-tag" />JavaScript, Ruby, Ruby on Rails, Websockets, ActionCable, Bootstrap</span>
    </div>
    <div className="link-box">
      <a href="http://flatironchatterbox.herokuapp.com/index.html">Live Demo</a>
      <a className="popup-modal-dismiss">Close</a>
    </div>
  </div>{/* modal-02 End */}
  <div id="modal-03" className="popup-modal mfp-hide">
    <img className="scale-with-grid" src="https://res.cloudinary.com/dx34xrygi/image/upload/v1539198884/Screen_Shot_2018-10-10_at_3.14.09_PM.png" alt />
    <div className="description-box">
      <h4>Portfolio</h4>
      <p>{"Portfolio website built using React, HTML, CSS, Bootstrap, and JavaScript."}</p>
      <span className="categories"><i className="fa fa-tag" />React, HTML, CSS, Bootstrap, JavaScript</span>
    </div>
    <div className="link-box">
      <a href="http://www.runandrerun.github.io">Portfolio</a>
      <a className="popup-modal-dismiss">Close</a>
    </div>
  </div>{/* modal-03 End */}

</div>
</section>

      </React.Fragment>
    );
  }
}
