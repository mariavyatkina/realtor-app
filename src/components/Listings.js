import React, {useRef, useState} from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Listing from "./Listing";
import "./Listings.css"
export default function Listings({listings, setListings}) {

    let [numOfBeds, setNumOfBeds] = useState(0);
    let [numOfBaths, setNumOfBaths] = useState(0);
    let [minPrice, setMinPrice] = useState(0);
    let [maxPrice, setMaxPrice] = useState(10000000);

    const bedRef = useRef(null);
    const bathRef = useRef(null);
    const minPriceRef = useRef(null);
    const maxPriceRef = useRef(null);

    const handleRemoveListing = (address) => {
  
    }

    const sortByBeds = () => {
        (bedRef.current.value === 'Beds')? setNumOfBeds(0):setNumOfBeds(bedRef.current.value);
    }
    const sortByBaths = () => {
        (bathRef.current.value === 'Baths')? setNumOfBaths(0):setNumOfBaths(bathRef.current.value);
    }
    const sortByMinPrice = () => {
        (minPriceRef) ? setMinPrice(minPriceRef.current.value) : (setMinPrice(0)) ;
    }
    const sortByMaxPrice = () => {
        (maxPriceRef) ? setMaxPrice(maxPriceRef.current.value) : (setMaxPrice(0)) ;
    }
    return (
        <div className="container bg-light listingsPage">
            <h1 className="display-5">Listings</h1>
            <form className="form-horizontal">
                <div className="form-row">
                    
                    <select className="form-select form-control" aria-label="Beds" ref={bedRef} onChange={sortByBeds}>
                        <option selected>Beds</option>
                        <option value="1">1+ Beds</option>
                        <option value="2">2+ Beds</option>
                        <option value="3">3+ Beds</option>
                        <option value="4">4+ Beds</option>
                        <option value="5">5+ Beds</option>
                    </select>
                    <select className="form-select form-control" aria-label="Baths" ref={bathRef} onChange={sortByBaths}>
                        <option selected>Baths</option>
                        <option value="1">1+ Baths</option>
                        <option value="2">2+ Baths</option>
                        <option value="3">3+ Baths</option>
                        <option value="4">4+ Baths</option>
                        <option value="5">5+ Baths</option>
                    </select>
                    <input type="number"className="form-control" min= "100" step="5" placeholder="Min Price" ref={minPriceRef} onChange={sortByMinPrice}></input>
                    <input type="number"className="form-control" min= "100" step="5" placeholder="Max Price" ref={maxPriceRef} onChange={sortByMaxPrice}></input>
                </div>
            </form>
            <span className="listings">
                {listings
                .filter(listing => 
                (listing.bed >= numOfBeds 
                && listing.bath >= numOfBaths 
                && listing.price >= minPrice
                && listing.price <= maxPrice))
                .map(
                    (listing, index) => {
                        listing.id = index;
                        return(
                            <>
                           <Listing listing={listing} key={listing.id} />
                            </>
                        )
                    }
                )}
            </span>
        </div>
        
    )
}
