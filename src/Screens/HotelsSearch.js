import React from 'react'
import { Link } from 'react-router-dom';
function searchHotel() {
    return (
        <div>
            <h1>Search Hotels Page</h1>
            <Link to="/rh" className="nav-link">Show results</Link>
        </div>
    )
}

export default searchHotel