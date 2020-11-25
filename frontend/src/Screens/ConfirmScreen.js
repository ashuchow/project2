import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import FinalBook from "../components/Tile";

function Reservation() {
  let flight = useLocation().data;
  console.log(flight);
  return (
    <div>
      <h1>CONGRATULATIONS! YOU HAVE BOOKED YOUR FLIGHT.</h1>
      <h2>Flight Details </h2>
      <div>
        <FinalBook
          flightname={flight.itineraries[0].segments[0].carrierCode}
          flightcode={flight.itineraries[0].segments[0].aircraft.code}
          acity={flight.itineraries[0].segments[0].arrival.iataCode}
          dcity={flight.itineraries[0].segments[0].departure.iataCode}
          atime= {flight.itineraries[0].segments[0].arrival.at}
          dtime={flight.itineraries[0].segments[0].departure.at}
          date={flight.itineraries[0].segments[0].departure.at}
          price={flight.price.grandTotal * 88}
          name="Dev"
          phone="9903012345"
          email="dev.ghosh@email.com"
        />
      </div>

      <Link to="/" className="nav-link">
        Book anything else?
      </Link>
    </div>
  );
}

export default Reservation;
