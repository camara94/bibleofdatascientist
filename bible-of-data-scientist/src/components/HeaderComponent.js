import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <>
               <Navbar dark>
                    <div className="container">
                    <NavbarBrand href="/">Bible Of Data Scientist</NavbarBrand>
                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h1>Bible Of Data Scientist</h1>
                                <p>In the end you should only measure and look at the numbers that drive action, meaning that the data tells you what you should do next.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron> 
            </>
        )
    }
}

export default Header;