// Navbar.js 
 
import React from 'react'; 
import './Navbar.css'; // Import CSS file for styling 
 
const Navbar = () => { 
  return ( 
    <nav className="navbar"> 
      <div className="container1"> 
        <a href="/" className="navbar-brand">SKY-SHIFT</a> 
        <ul className="navbar-nav"> 
          <li className="nav-item"> 
            <a href="/home" className="nav-link">Home</a> 
          </li> 
          <li className="nav-item dropdown"> 
            <a href="#" className="nav-link">Account</a> 
            <div className="dropdown-content"> 
              <a href="/register">Register</a> 
              <a href="/login">Login</a> 
              <a href="/logout">Logout</a> 
            </div> 
          </li> 
        </ul> 
      </div> 
    </nav> 
  ); 
}; 
 
export default Navbar;