import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import NavBrand from './nav-brand.component';
import MobileNavToggler from './nav-toggler.component';

import 'bootstrap/dist/css/bootstrap.min.css';

class TopNavbar extends Component {
    render() {
        return (

            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <NavBrand text="React Router Example" />

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" exact activeClass="active">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">

                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/roverData" activeClass="active">
                                Rover Data
                            </NavLink>
                            
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/marsMap" activeClass="active">
                                 Mars Map
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default TopNavbar;