import React from 'react'
import { Link } from 'react-router-dom';
function searchFlight() {
    return (
        <div>
            <h1>Search bar for flights</h1>
            <Link to="/rf" className="nav-link">Show results</Link>
        </div>
    )
}

export default searchFlight