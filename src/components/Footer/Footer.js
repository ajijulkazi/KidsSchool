import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "goldenrod"
      }
    return (
        <div className='header'>
            <nav>

                <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
                <NavLink activeStyle={activeStyle} to="/service">Services</NavLink>
                <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
                <NavLink activeStyle={activeStyle} to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
};

export default Footer;