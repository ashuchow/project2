import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Userprofile from "../components/userprofile";
import Hotelhistory from "../components/HotelHistory";
import FlightHistory from "../components/flighthistory";

class UserProf extends Component {
  render() {
    return (
 

      <div>
        <Userprofile
        name="Dev"
        email="devghosh17@gmail.com"
        phone="9831218674"
        address="123 Road Road"
        picture="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
  
        />
        <h1>BOOKING HISTORY</h1>
        <h1></h1>
        <h1></h1>
            <h2>Flights</h2>
             <FlightHistory
             flightname="Jet Airways 11"
             acity="Kolkata"
             dcity=" New Delhi"
             atime="11:30"
             dtime="3:30"
             date="11.11.20"
             price="Rs. 9000"
            />
            <h2>Hotels</h2>
            <Hotelhistory
              hotelname="Taj Bengal"
              hoteladdress="..."
              hotelprice="$100"
            />

      </div>
    );
  }
}

export default UserProf;