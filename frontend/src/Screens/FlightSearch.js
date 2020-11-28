// // import React from 'react'
// // import { Link } from 'react-router-dom';

// // function searchFlight() {
// //     return (
// //         <div>
// //             <h1>Search bar for flights</h1>
// //             <Link to={{pathname: "/rf", data: {arrival: "BOM", departure: "DEL"}}} className="nav-link">Show results</Link>
// //         </div>
// //     )
// // }

// // export default searchFlight
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { DropdownButton, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

function SearchFlight() {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [date, setDate] = useState("");
  const handleSelect = (e) => {
    //console.log(e);
    setArrival(e);
  };
  const handleSelectD = (e) => {
    //console.log(e);
    setDeparture(e);
  };
  const handleSelectDate = (e) => {
    //console.log(e);
    setDate(e.target.value);
  };
  return (
    <div>
      <div className = "header">
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
            <Dropdown.Item eventKey="CCU">Kolkata</Dropdown.Item>
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
            <Dropdown.Item eventKey="CCU">Kolkata</Dropdown.Item>
            <Dropdown.Item eventKey="BLR">Bengaluru</Dropdown.Item>
            <Dropdown.Item eventKey="LUH">Ludhiana</Dropdown.Item>
            <Dropdown.Item eventKey="MAA">Chennai</Dropdown.Item>
          </DropdownButton>
          <p>Departure city : {departure}</p>
        </div>
        <p>Date of departure: </p>
        <input type="text" name="date" value={date} onChange={handleSelectDate}></input>
      </div>
      <div>

        <Link
          to={{
            pathname: "/rf",
            data: { arrival: arrival, departure: departure, date: date },
          }}
          className="nav-link"
        >
          <Button>Show results</Button>
        </Link>
      </div>
    </div>
  );
}

export default SearchFlight;

// import React from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Form } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import TextField from "@material-ui/core/TextField";
// import { makeStyles } from "@material-ui/core/styles";
// import { useState } from "react";
// const searchFlight = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

// function DatePickers() {
//   const classes = searchFlight();
//   const [arrival, setArrival] = useState("");
//   const [departure, setDeparture] = useState("");

//   const handleSelect = (e) => {
//     console.log(e.target.valuevalue);
//     setArrival(e.value);
//   };
//   const handleSelectD = (e) => {
//     //console.log(e);
//     setDeparture(e);
//   };
//   return (
//     <div>
//       <div>
//         <h1>Search Flights</h1>
//       </div>
//       <div>
//         <Form>
//           <Form.Group controlId="exampleForm.ControlSelect1" >
//             <Form.Label>From:</Form.Label>
//             <Form.Control as="select" value={arrival} onChange={handleSelect}>
//               <option value="CCU">Kolkata</option>
//               <option value="DEL">Delhi</option>
//               <option value="BLR">Banglore</option>
//               <option value="BOM">Mumbai</option>
//               <option value="MAA">Chennai</option>
//             </Form.Control>
//           </Form.Group>
//           <p>To: {arrival}</p>
//           <Form.Group controlId="exampleForm.ControlSelect1" onSelect={handleSelectD}>
//             <Form.Label>Destination City</Form.Label>
//             <Form.Control as="select">
//               <option value="CCU">Kolkata</option>
//               <option value="DEL">Delhi</option>
//               <option value="BLR">Banglore</option>
//               <option value="BOM">Mumbai</option>
//               <option value="MAA">Chennai</option>
//             </Form.Control>
//           </Form.Group>
//         </Form>
//       </div>
//       <div>
//         <form className={classes.container} noValidate>
//           <TextField
//             id="date"
//             label="FlightDate"
//             type="date"
//             defaultValue="2020-11-24"
//             className={classes.textField}
//             InputLabelProps={{
//               shrink: true,
//             }}
//           />
//         </form>

//         <div>
//           <Link to="/rf">
//             <Button variant="danger">Search</Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DatePickers