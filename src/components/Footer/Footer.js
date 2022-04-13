import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = ({ children }) => {
       
    const activeStyle={
        fontWeight: "bold",
        color: "goldenrod"
      }
    return (
        <div className='header'>    
            <>
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "green"
        }}
      >
         <nav>

<NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
<NavLink activeStyle={activeStyle} to="/teacher">Teacher</NavLink>
<NavLink activeStyle={activeStyle} to="/about">About</NavLink>
<NavLink activeStyle={activeStyle} to="/contact">Contact</NavLink>
</nav>
      </div>
    </>

        </div>
    );
};

export default Footer;
