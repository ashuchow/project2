import React, { useState, useEffect } from "react";

import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import FlightTile from "../components/FlightTile";


const ResultFlight = () => {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let arrival = useLocation().data.arrival;
  let departure = useLocation().data.departure;
  console.log(arrival);
  console.log(departure);
  useEffect(() => {

    const fetchFlights = async () => {
      const result = await axios.post(
        `http://localhost:5000/amadeus/date?departure=2020-12-23&arrival=2020-12-21&locationDeparture=${departure}&locationArrival=${arrival}`
      );
      console.log(result.data.data);
      setFlights(result.data.data);
      setIsLoading(false);
    };
    fetchFlights();
  }, []);

  return (
    <div>
    <h1>Show Flight Search Results</h1>
    <section>
      {flights.slice(0, 10).map((flight) => (
        <div key={flight.id}>
          {console.log(flight)}
          <FlightTile
          id={flight.id}
          flightname="Jet Airways 11"
          acity={arrival}
          dcity={departure}
          atime={flight.itineraries[0].segments[0].arrival.at}
          dtime={flight.itineraries[0].segments[0].departure.at}
          date={flight.lastTicketingDate}
          price= {flight.price.base}
          flight={flight}
        />
        </div>
      ))}
    </section>
  </div>

  );
};

export default ResultFlight;
