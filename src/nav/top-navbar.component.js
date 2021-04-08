import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import NavBrand from './nav-brand.component';
import MobileNavToggler from './nav-toggler.component';

import 'bootstrap/dist/css/bootstrap.min.css';

class TopNavbar extends Component {
    constructor(props){
        super(props);
            this.state={
                menu: false
            };
            this.toggleMenu = this.toggleMenu.bind(this);

        }
        toggleMenu(e){
            console.log(e);
            this.setState({ menu: e})
        }
    

    render() {
    const show = (this.state.menu) ? "show" : "" ;

        return (

            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <NavBrand text="Todays NASA Image" />
                <MobileNavToggler fromParent={this.toggleMenu}></MobileNavToggler>
                <div className={"navbar-collapse collapse" + show} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <NavLink className="nav-link" to="/" exact activeClass="active">
                                Home
                            </NavLink>
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