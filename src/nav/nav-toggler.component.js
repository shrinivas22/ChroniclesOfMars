import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
class MobileNavToggler extends Component {
    constructor(props){
        super(props);
        this.state={
                isClicked:false
        };

        this.handleLangChange = this.handleLangChange.bind(this);
    }
    handleLangChange = () => {
        this.setState({isClicked: !this.state.isClicked});
        console.log(this.state.isClicked);
        this.props.fromParent(this.state.isClicked);  
    }
    render() {
        console.log(this.props.fromparent);
        /*<Nav className="mr-auto">
      <NavDropdown title="Options" id="basic-nav-dropdown">
          
        <NavDropdown.Item ><NavLink className="nav-link" to="/" exact activeClass="active">
                                Home
                            </NavLink></NavDropdown.Item>
        <NavDropdown.Item ><NavLink className="nav-link" to="/roverData" activeClass="active">
                                Rover Data
                            </NavLink></NavDropdown.Item>
        <NavDropdown.Item ><NavLink className="nav-link" to="/marsMap" activeClass="active">
                                 Mars Map
                            </NavLink></NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
    */
              
        return (
        <button className="navbar-toggler"
                    type="button"
                    onClick ={this.handleLangChange} 
                >
                <span className="navbar-toggler-icon"></span>
            </button>   
        );
    }
}

export default MobileNavToggler;