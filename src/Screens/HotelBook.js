import React from 'react'
import { Link } from 'react-router-dom';
function bookHotel() {
    return (
        <div>
            <h1>Hotel Product Page</h1>
            <Link to="/pymnt" className="nav-link">Go to checkout</Link>
        </div>
    )
}

export default bookHotel