import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import HotelConfirm from "../components/HotelConf";
function HotelConfirmed() {
  let hotel = useLocation().data;
  console.log(hotel);
  return (
    <div>
      <div>
        <br/>
        <HotelConfirm
          hotelname={hotel.hotel.name}
          hoteladdress={hotel.hotel.address.lines[0]}
          hotelpobox={hotel.hotel.address.postalCode}
          hotelprice={hotel.offers[0].price.total}
          hotelcurrency={hotel.offers[0].price.currency}
          hoteldescription={
            hotel.hotel.description ? hotel.hotel.description.text : ""
          }
          inDate={hotel.offers[0].checkInDate}
          outDate={hotel.offers[0].checkOutDate}
          name="Dev"
          phone="9831022671"
          email="devghosh@gmail.com"
        />
      </div>

      <Link to="/" className="nav-link">
        Book anything else?
      </Link>
    </div>
  );
}
export default HotelConfirmed;
