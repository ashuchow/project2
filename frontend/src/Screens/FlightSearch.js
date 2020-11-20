import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropdownButton} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'



  
function searchFlight() {
    return (
     <div>
        <div>
            <h1>Search Flights</h1>
            
        </div>
        <div className = "flex-container">
            <div className = "flex-child arrival">
            <DropdownButton id="dropdown-basic-button" title="From:">
            <Dropdown.Item href="#/action-1">New Delhi</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Mumbai</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Kolkata</Dropdown.Item> 
            <Dropdown.Item href="#/action-1">Bengaluru</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Ludhiana</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Chennai</Dropdown.Item> 
            </DropdownButton>
            
            </div>
            <div className = "flex-child destination">
            <DropdownButton id="dropdown-basic-button" title="To:">
            <Dropdown.Item href="#/action-1">New Delhi</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Mumbai</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Kolkata</Dropdown.Item> 
            <Dropdown.Item href="#/action-1">Bengaluru</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Ludhiana</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Chennai</Dropdown.Item> 
            </DropdownButton>
            
            </div>
            
        </div>
        <div>
        <Link to="/rf" className="nav-link">Results</Link>
        </div>

    </div>
    )
}

export default searchFlight