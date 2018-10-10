import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <header id="home">
      <nav id="nav-wrap">
        <a
          className="mobile-btn"
          href="#nav-wrap"
          title="Show navigation"
        >
          Show navigation
        </a>
        <a className="mobile-btn" href="#" title="Hide navigation">
          Hide navigation
        </a>
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Experience
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Projects
            </a>
          </li>
        </ul>{" "}
      </nav>{" "}
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm Andre Santiago.</h1>
          <h3>
            <span>I'm a New York City based </span><span>Full Stack Software Engineer</span>,{" "}
            <span>Network Engineer</span> <span>and</span> <span>Photographer</span> <span>that loves to create, travel, and explore with my dog Panda. Let's{" "}</span>
            <a className="smoothscroll" href="#about">
              <span>start scrolling{" "}</span>
            </a>
            <span>and learn more{" "}</span>
            <a className="smoothscroll" href="#about">
              <span>about me</span>
            </a>.
          </h3>
          <hr />
          <ul className="social">
            <li>
              <a href="https://www.twitter.com/THERUNANDRE">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/andre-santiago-79724467/">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/run.andre/">
                <i className="fa fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle" />
        </a>
      </p>
    </header>

      </React.Fragment>
    );
  }
}
