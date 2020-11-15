import React from 'react'
import { Link } from 'react-router-dom';
function resultHotel() {
    return (
        <div>
            <h1>Search results for Hotels Page</h1>
            <Link to="/bh" className="nav-link">Hotel XYZ</Link>
        </div>
    )
}

export default resultHotel