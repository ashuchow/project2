import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import HotelBookingTile from "../components/HotelBookingTile";

class bookHotel extends Component {
  render() {
    return (
      <div>
        
          
        <div className="header">
          <h1>Book Hotel</h1>
        </div>
        <div>
        <HotelBookingTile
          
          hotelname = "Taj Palace"
          hotelcity = "New Delhi"
          hotelameneties = " Elevator, Parking, Pool, Free Breakfast"
          hotelcontact = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          hotelprice = "1110"
          hotelimage = "https://im.rediff.com/money/2012/jul/tajpalace.jpg"
          hoteldescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          hoteladdress = "P.O. Box 283 8562 Fusce Rd Frederick Nebraska 20620"
        />
        
        </div>

    
            
      </div>
    );
  }
}

export default bookHotel;