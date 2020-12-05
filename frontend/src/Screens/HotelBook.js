import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import HotelBookingTile from "../components/HotelBookingTile";

function BookHotel() {
  let hotel = useLocation().data;
  console.log(hotel);
  return (
    <div>
      <div className="header">
        <h1>Book Hotel</h1>
      </div>
      <div>
        <HotelBookingTile
          hotelname={hotel.hotel.name}
          hotelcity={hotel.hotel.address.cityName}
          hotelameneties={hotel.hotel.amenities}
          hotelcontact={hotel.hotel.contact}
          hotelprice={hotel.offers[0].price.total}
          hoteldescription={
            hotel.hotel.description ? hotel.hotel.description.text : ""
          }
          hoteladdress={hotel.hotel.address.lines[0]}
          hotelpobox={hotel.hotel.address.postalCode}
          hotelcurrency={hotel.offers[0].price.currency}
          hotelrating={hotel.hotel.rating}
          hotel={hotel}
        />
      </div>
    </div>
  );
}

export default BookHotel;
