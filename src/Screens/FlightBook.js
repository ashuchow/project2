import React from 'react'
import { Link } from 'react-router-dom';
function bookFlight() {
    return (
        <div>
            <h1>Flight Booking Page</h1>
            <Link to="/pymnt" className="nav-link">Go to checkout</Link>
        </div>
    )
}

export default bookFlight