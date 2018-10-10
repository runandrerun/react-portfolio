import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (

      <div className="App">
        <Route exact path={`/`} render={() =>
          <React.Fragment>
          <Header />
          <About />
          <Resume />
          <Portfolio />
          <ContactUs />
          <Footer />
          </React.Fragment>
        } />

      </div>
    );
  }
}
export default withRouter(App);
