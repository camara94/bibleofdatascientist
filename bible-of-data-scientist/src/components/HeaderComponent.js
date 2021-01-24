import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler,Input, Collapse, NavItem, Jumbotron, Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
      }

      handleLogin(event) {
        alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked);
        this.toggleModal();
        event.preventDefault();

    }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

     toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
     }

    render() {
        return(
            <>
                <Navbar  expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}  className="bg-primary"/>
                        <NavbarBrand className="mr-auto" href="/home"><img src='../images/mylogo1.png' height="30" width="41" alt='Bible Of Data Scientist' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/about'><span className="fa fa-info fa-lg"></span> About Me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/course'><span className="fa fa-list fa-lg"></span> Course</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contact'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal} color="primary">
                                        <span className="fa fa-sign-in fa-lg"></span>
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                 <h1>Bible Of Data Scientist</h1>
                                <p>In the end you should only measure and look at the numbers that drive action, meaning that the data tells you what you should do next.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader className="bg-primary text-white" toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" placeholder="Usernme" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" placeholder="password" />
                            </FormGroup>
                            <FormGroup check>
                                <Input type="checkbox" />
                                <Label check>Remember me</Label>
                            </FormGroup>
                            <Button type="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;