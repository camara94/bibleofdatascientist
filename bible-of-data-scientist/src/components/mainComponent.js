import React, { Component } from 'react';
import './../App.css';
import { COURS  } from './../shared/course';
import { ABOUTME  } from './../shared/about';
import Moduleone  from './moduleoneComponent';
import Header from './HeaderComponent';
import Footer from './footer';
import Home from './homeComponent';
import About from './aboutComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: COURS,
      about: ABOUTME
    };
  }
  render() {

    const HomePage = () => {
        return (
            <Home />
        );
    }

    return (
      <div>
        <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route path="/about" component={() => <About about={this.state.about} />} />
                <Route path="/contact" component={Contact} />
                <Route exact path="/course" component={ () => <Moduleone courses={this.state.courses} /> } />
                <Redirect to="/home" />
            </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
