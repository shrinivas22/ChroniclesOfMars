import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBrand extends Component {
    render() {
        return (
            <NavLink className="navbar-brand" to="/">
                <h1 style={{fontSize: '20px', padding: 0, margin: 0}}>
                    {this.props.text}
                </h1>
            </NavLink>
        );
    }
}

export default NavBrand;