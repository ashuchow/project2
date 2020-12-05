import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { DropdownButton } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { makeStyles } from "@material-ui/core/styles";

// const searchHotel = makeStyles((theme) => ({
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
function SearchHotel() {
  const [city, setCity] = useState("");
  const [radius, setRadius] = useState("");
  const [inDate, setinDate] = useState("");
  const [outDate, setoutDate] = useState("");

  const handleSelectCity = (e) => {
    //console.log(e);
    setCity(e);
  };
  const handleSelectRadius = (e) => {
    //console.log(e);
    setRadius(e);
  };
  const handleSelectIn = (e) => {
    //console.log(e);
    setinDate(e.target.value);
  };
  const handleSelectOut = (e) => {
    //console.log(e);
    setoutDate(e.target.value);
  };
  return (
    <div>
      <div className="header">
        <h1>Search Hotels</h1>
      </div>
      <div>
        {/* <Form>
          <Form.Group onSubmit={handleSubmitCity} controlId="exampleForm.ControlSelect1">
            <Form.Label>Enter City</Form.Label>
            <Form.Control name="City" as="select" onChange={handleChange}>
              <option value="CCU">Kolkata</option>
              <option value="">Delhi</option>
              <option>Banglore</option>
              <option>Mumbai</option>
              <option>Chennai</option>
            </Form.Control>
          </Form.Group>
          </Form>
      </div>
      <p>City: {city}</p>
      <div>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="Check-in Date"
            type="date"
            defaultValue="2020-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
      <div>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="Checkout Date"
            type="date"
            defaultValue="2020-05-25"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form> */}
        <DropdownButton
          id="dropdown-basic-button"
          title="Select City"
          onSelect={handleSelectCity}
        >
          <Dropdown.Item eventKey="LON">London</Dropdown.Item>
          <Dropdown.Item eventKey="NYC">New York</Dropdown.Item>
          <Dropdown.Item eventKey="BKK">Bangkok</Dropdown.Item>
          <Dropdown.Item eventKey="SYD">Sydney</Dropdown.Item>
          <Dropdown.Item eventKey="MIA">Miami</Dropdown.Item>
          <Dropdown.Item eventKey="PAR">Paris</Dropdown.Item>
        </DropdownButton>
        <p>City: {city}</p>

        <DropdownButton
          id="dropdown-basic-button"
          title="Select City"
          onSelect={handleSelectRadius}
        >
          <Dropdown.Item eventKey="1">1</Dropdown.Item>
          <Dropdown.Item eventKey="2">2</Dropdown.Item>
          <Dropdown.Item eventKey="5">5</Dropdown.Item>
          <Dropdown.Item eventKey="7">7</Dropdown.Item>
          <Dropdown.Item eventKey="10">10</Dropdown.Item>
          <Dropdown.Item eventKey="15">15</Dropdown.Item>
        </DropdownButton>
        <p>Radius: {radius} KM </p>
        <h4>Enter date in YYYY-MM-DD Format</h4>
        <p>Check In Date : {inDate}</p>
        <input
          type="text"
          name="date"
          value={inDate}
          onChange={handleSelectIn}
        ></input>

        <p>Check Out Date: {outDate}</p>
        <input
          type="text"
          name="date"
          className="bgcolor-black"
          value={outDate}
          onChange={handleSelectOut}
        ></input>

        <div className="buttonContainer">
          <Link
            to={{
              pathname: "/rh",
              data: {
                city: city,
                radius: radius,
                inDate: inDate,
                outDate: outDate,
              },
            }}
            className="nav-link"
          >
            <Button variant="danger">Search</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchHotel;
