import React from 'react'
import { Link } from 'react-router-dom';
function bookHotel() {
    return (
        <div>
            <h1>Hotels Results</h1>
            <Link to="/pymnt" className="nav-link">Go to Hotel XYZ</Link>
        </div>
    )
}

export default bookHotel