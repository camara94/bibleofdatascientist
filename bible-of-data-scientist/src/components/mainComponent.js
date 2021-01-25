import React, { Component } from 'react';
import './../App.css';
import Module  from './moduleComponent';
import Header from './HeaderComponent';
import Footer from './footer';
import Home from './homeComponent';
import About from './aboutComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Resource from './resourceComponent';

const mapStateToProps = state => {
  return {
    courses: state.courses,
    about: state.about,
    datascience: state.datascience
  };
}


class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    const HomePage = () => {
        return (
            <Home datascience={this.props.datascience} />
        );
    }

    return (
      <div>
        <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route path="/about" component={() => <About about={this.props.about} />} />
                <Route path="/contact" component={Contact} />
                <Route path="/resources" component={() =><Resource courses={this.props.courses}  />} />
                <Route exact path="/moduleone" component={ () => <Module courses={this.props.courses.moduleone} /> } />
                <Route exact path="/moduletwo" component={ () => <Module courses={this.props.courses.moduletwo} /> } />
                <Redirect to="/home" />
            </Switch>
        <Footer about={this.props.about} />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
