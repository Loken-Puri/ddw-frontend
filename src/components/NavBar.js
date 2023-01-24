import React, { useState } from "react";
import DDWLogo from "../images/DDW-Logo.png";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import {Link} from 'react-router-dom'

function NavBar() {
   const [click, setClick] = useState(false);

   const handleClick = () => setClick(!click);
  const {
    isLoggedIn,
    user,
    logOutUser,
  } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="brand-logo">
        <Link to="/">
          <img src={DDWLogo} alt="DDW Logo" height="35" loading="lazy" />
        </Link>
        <p id="brand-name">Don't Die Without...</p>
      </div>
      <div class="navbar-links">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/signup" activeClassName="active"
                className="nav-links"
                onClick={handleClick}>Signup </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" activeClassName="active"
                className="nav-links"
                onClick={handleClick}>Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" activeClassName="active"
                className="nav-links"
                onClick={handleClick}>My Profile</Link>
          </li>
          <li className="nav-item">
            <Link to="/create-entry" activeClassName="active"
                className="nav-links"
                onClick={handleClick}>Add Item</Link>
          </li>
          <li className="nav-item">
            <Link to="/" activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div> 
    </nav>
  );
}

export default NavBar