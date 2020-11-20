import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

// const amadeus = axios.create({
//     baseURL: 'http://localhost:5000/amadeus/citysearch'
// })
function ResultFlight() {
    const [flights, setFlights] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        // const fetchCity = async () => {
        //     const result = await axios(`http://localhost:5000/amadeus/citysearch?keyword=mumbai`)
        //     console.log(result.data.data)
        // }
        // fetchCity()
        const fetchFlights = async () => {
            const result = await axios.post(`http://localhost:5000/amadeus/date?departure=2020-12-20&arrival=2020-12-21&locationDeparture=BOM&locationArrival=DEL`)
            console.log(result.data.data)
            setFlights(result.data.data)
            setIsLoading(false)
        }
        fetchFlights() 
    }, [])

    return (
        <div>
            <h1>Show Flight Search Results</h1>
            <section>
                {flights.slice(0,10).map(flight => (
                    <div key={flight.id}>
                        <h3>Flight data {flight.id}</h3>
                        <ul>
                            <li>Last date to Book: {flight.lastTicketingDate}</li>
                            <li>Duration: {flight.itineraries[0].duration}</li>
                            <li>Price = {flight.price.base} {flight.price.currency}</li>
                            <li>Seats left = {flight.numberOfBookableSeats}</li>
                            <li>{flight.lastTicketingDate}</li>
                        </ul>
                        <Link to="/bf" className="nav-link"><button>Book Flight</button></Link>
                        
                        </div>
                ))}
            </section>
            
        </div>
    )
}

export default ResultFlight