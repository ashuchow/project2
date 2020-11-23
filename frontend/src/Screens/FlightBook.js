import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Alert, Card, Modal, Breadcrumb, Table } from "react-bootstrap";
import BookingTile from "../components/bookingTile";



class bookFlight extends Component{
    render() {
    return (
        <div>
            <BookingTile 
             flightname="Jet Airways 11"
             acity="Kolkata"
             dcity=" New Delhi"
             atime="11:30"
             dtime="3:30"
             date="11.11.20"
             price="Rs. 9000"
            />
            
        </div>
    )
}
}

export default bookFlight