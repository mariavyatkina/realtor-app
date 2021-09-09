import React from 'react'
import {useParams} from 'react-router-dom'
export default function ListingDetails({listings}) {
    const id = useParams().id;
    const listing = listings.find(l => l.id === Number(id));
    return (
        <div>
            this is details of the listing
            {console.log(listing)}
        </div>
    )
}
