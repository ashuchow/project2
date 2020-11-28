import React from 'react'
import { Link } from 'react-router-dom';
function bookHotel() {
    return (
        <div>
        <div className="header">
          <h1>Book Hotel</h1>
        </div>
        

        <div>
            <Link to="/pymnt" className="nav-link">Go to checkout</Link>
        </div>
        </div>
    )
}

export default bookHotel