import React, { Component } from 'react';
import './../App.css';
import Moduleone  from './moduleoneComponent';
import Header from './HeaderComponent';
import Footer from './footer';
import Home from './homeComponent';
import About from './aboutComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
    about: state.about
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
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
                <Route path="/about" component={() => <About about={this.props.about} />} />
                <Route path="/contact" component={Contact} />
                <Route exact path="/course" component={ () => <Moduleone courses={this.props.courses} /> } />
                <Redirect to="/home" />
            </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
