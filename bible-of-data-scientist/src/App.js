import React, { Component } from 'react';
import './App.css';
import { COURS  } from './shared/course';
import Moduleone  from './components/moduleoneComponent';
import Header from './components/HeaderComponent';
import Footer from './components/footer';


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
        <Header />
        <Moduleone courses={this.state.courses} />
        <Footer />
      </div>
    );
  }
}

export default App;
