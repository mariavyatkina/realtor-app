import React from 'react'
import './Listing.css';
import {Link} from 'react-router-dom';
export default function Listing({listing}) {
    return (
        <div class="card">
            <img className="card-img-top" src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80" alt="Card image cap"/>
            <div className="card-body">
            <Link to={`/notes/${listing.id}`}><h5 className="card-title">{listing.address}</h5></Link>
            <p>
                    Bedrooms: {listing.bed} <br/>
                    Bathrooms: {listing.bath}<br/>
                    Monthly Rent: {listing.price} <br/>
                    Available: {listing.isAvailable ? "Yes" : "No"}

                    {console.log(listing.address + " has index of " + listing.id + "isAvailable = " + listing.isAvailable)}
            </p>
            <a href="#" className="btn btn-primary m-1">View Details</a>
            <a href="#" className="btn btn-danger m-1">Remove</a>
            </div>
      </div>
    )
}
