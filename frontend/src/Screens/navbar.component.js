import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Navbar } from 'react-bootstrap'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'


export default class navbar extends Component {

  render() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Travel-It</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/up" className="nav-link">User Profile</Link>
          </li>
          <li className="navbar-item">
          <Link to="/us" className="nav-link">Create User/Sign In</Link>
          </li>
        </ul>
        </div>
      </nav>
    )
        
  
    }
}