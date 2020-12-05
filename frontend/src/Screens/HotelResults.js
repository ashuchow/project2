import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import HotelTile from "../components/HotelTile";
import Spinner from "../components/Spinner";

const ResultHotel = () => {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      const result = await axios.post(
        "http://localhost:5000/amadeus/hotelsearch?city=LCY&radius=10&inDate=2020-12-12&outDate=2020-12-15"
      );
      console.log(result.data.data);
      setHotels(result.data.data);
      setIsLoading(false);
    };
    fetchHotels();
  }, []);
  return isLoading ? (
    <div>
      <div className="header">
        <h1>Hotels</h1>
      </div>
      <Spinner />
    </div>
  ) : (
    <div>
      <div className="header">
        <h1>Hotels</h1>
      </div>
      <br />
      <section>
        {hotels.map((hotel) => (
          <div key={hotel.id}>
            {console.log(hotel)}
            <HotelTile
              hotelname={hotel.hotel.name}
              hotelprice={hotel.offers[0].price.total}
              hotelcurrency={hotel.offers[0].price.currency}
              hotelcity={hotel.hotel.address.cityName}
              hoteldescription={hotel.hotel.description ? hotel.hotel.description.text : ""}
              hoteladdress={hotel.hotel.address.lines[0]}
              hotelpobox={hotel.hotel.address.postalCode}
              hotel={hotel}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default ResultHotel;
