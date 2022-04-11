import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../Images/students.png';

const Header = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "green"
      }
    return (
        <div className='header'>
            <nav>
                <img className='logo' src={logo} alt="" />

                <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
                <NavLink activeStyle={activeStyle} to="/service">Services</NavLink>
                <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
                <NavLink activeStyle={activeStyle} to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;