import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import HotelTile from "../components/HotelTile";

class resultHotel extends Component {
  render() {
    return (
      <div>
        <HotelTile
          id = "1"
          hotelname = "Taj Palace"
          hotelcity = "New Delhi"
          hotelimage = "https://im.rediff.com/money/2012/jul/tajpalace.jpg"
          hoteldescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          hoteladdress = "P.O. Box 283 8562 Fusce Rd Frederick Nebraska 20620"
        />
        <HotelTile
          id = "1"
          hotelname = "Taj Palace"
          hotelcity = "New Delhi"
          hotelimage = "https://im.rediff.com/money/2012/jul/tajpalace.jpg"
          hoteldescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          hoteladdress = "P.O. Box 283 8562 Fusce Rd Frederick Nebraska 20620"
        /><HotelTile
          id = "1"
          hotelname = "Taj Palace"
          hotelcity = "New Delhi"
          hotelimage = "https://im.rediff.com/money/2012/jul/tajpalace.jpg"
          hoteldescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          hoteladdress = "P.O. Box 283 8562 Fusce Rd Frederick Nebraska 20620"
        />

    
            
      </div>
    );
  }
}

export default resultHotel;