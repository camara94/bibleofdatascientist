import './App.css';
import Course  from './components/CourseComponent';
import { Navbar, NavbarBrand } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <Navbar dark color="secondary">
          <div className="container">
            <NavbarBrand href="/">Bible Of Data Scientist</NavbarBrand>
          </div>
      </Navbar>
      <Course />
    </div>
  );
}

export default App;
