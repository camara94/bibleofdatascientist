import React, { Component } from 'react';
import './App.css';
import Course  from './components/CourseComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import { COURS  } from './shared/course';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: COURS
    };
  }
  render(){
    return (
      <div>
        <Navbar dark color="secondary">
            <div className="container">
              <NavbarBrand href="/">Bible Of Data Scientist</NavbarBrand>
            </div>
        </Navbar>
        <Course courses={this.state.courses} />
      </div>
    );
  }
}

export default App;
