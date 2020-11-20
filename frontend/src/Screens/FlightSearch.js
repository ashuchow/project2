// import React from 'react'
// import { Link } from 'react-router-dom';

// function searchFlight() {
//     return (
//         <div>
//             <h1>Search bar for flights</h1>
//             <Link to={{pathname: "/rf", data: {arrival: "BOM", departure: "DEL"}}} className="nav-link">Show results</Link>
//         </div>
//     )
// }

// export default searchFlight
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { DropdownButton } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

function SearchFlight() {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const handleSelect = (e) => {
    //console.log(e);
    setArrival(e);
  };
  const handleSelectD = (e) => {
    //console.log(e);
    setDeparture(e);
  };
  return (
    <div>
      <div>
        <h1>Search Flights</h1>
      </div>
      <div className="flex-container">
        <div className="flex-child arrival">
          <DropdownButton
            id="dropdown-basic-button"
            title="From:"
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="DEL">New Delhi</Dropdown.Item>
            <Dropdown.Item eventKey="BOM">Mumbai</Dropdown.Item>
            <Dropdown.Item eventKey="SCU">Kolkata</Dropdown.Item>
            <Dropdown.Item eventKey="BLR">Bengaluru</Dropdown.Item>
            <Dropdown.Item eventKey="LUH">Ludhiana</Dropdown.Item>
            <Dropdown.Item eventKey="MAA">Chennai</Dropdown.Item>
          </DropdownButton>
          <p>Arrival city: {arrival}</p>
        </div>
        <div className="flex-child destination">
          <DropdownButton
            id="dropdown-basic-button"
            title="To:"
            onSelect={handleSelectD}
          >
            <Dropdown.Item eventKey="DEL">New Delhi</Dropdown.Item>
            <Dropdown.Item eventKey="BOM">Mumbai</Dropdown.Item>
            <Dropdown.Item eventKey="SCU">Kolkata</Dropdown.Item>
            <Dropdown.Item eventKey="BLR">Bengaluru</Dropdown.Item>
            <Dropdown.Item eventKey="LUH">Ludhiana</Dropdown.Item>
            <Dropdown.Item eventKey="MAA">Chennai</Dropdown.Item>
          </DropdownButton>
          <p>Departure city : {departure}</p>
        </div>
      </div>
      <div>
        <Link
          to={{
            pathname: "/rf",
            data: { arrival: arrival, departure: departure },
          }}
          className="nav-link"
        >
          Show results
        </Link>
      </div>
    </div>
  );
}

export default SearchFlight;
