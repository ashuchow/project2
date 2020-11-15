import React from 'react'
import { Link } from 'react-router-dom';
function resultFlight() {
    return (
        <div>
            <h1>Show Flight Search Results</h1>
            <Link to="/bf" className="nav-link">Flight XYZ</Link>
        </div>
    )
}

export default resultFlight