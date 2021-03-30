import React from "react"
import './App.css';
import {Link} from 'react-router-dom';
import Logo from './logo.png'

function Nav() {
  return (
    <nav>
    <img className="logo" src={Logo} alt="a logo"/>
    <ul className="nav-Links">
    <Link to="/home">
    <li> Home</li>
    </Link>
    <Link to="/about">
    <li>About</li>
    </Link>
    </ul>
    </nav>

  );
}

export default Nav;
