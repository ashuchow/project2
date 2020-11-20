import React from 'react'
import { Link } from 'react-router-dom';

function searchFlight() {
    return (
        <div>
            <h1>Search bar for flights</h1>
            <Link to={{pathname: "/rf", data: ["BOM", "DEL"]}} className="nav-link">Show results</Link>
        </div>
    )
}

export default searchFlight