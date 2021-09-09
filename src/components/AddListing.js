import React, {useRef} from 'react'
import "./AddListing.css";
import Listing from "./Listing"

export default function AddListing({listings, setListings}) {
    let addressRef = useRef("");
    let bedRef = useRef(null);
    let bathRef = useRef(null);
    let priceRef = useRef(null);
    let imageRef = useRef(null);
   

    const handleAddListing = (e)=>{
        e.preventDefault();
        const address = addressRef.current.value;
        const bed = bedRef.current.value;
        const bath =bathRef.current.value;
        const price = priceRef.current.value;
        const image = imageRef.current.value;

        setListings(prevListings=>{
            return[...prevListings, {address: address, bed: bed, bath: bath, price: price, isAvailable: true}]
        });
        alert("The listing has successfully been added.")

    }
    return (
        <div className="container bg-light ">
        <h1 className="display-5">Add a Listing</h1>
        <form className="col-6">
            <div className="form-group">
                <label >Listing's Address</label>
                <input type="text" className="form-control" placeholder="123 Main Street" ref={addressRef} required></input>
            </div>
            <div className="form-group">
                <label >Number of bedrooms</label>
                <input type="number" className="form-control" min = "1" step="1" placeholder="2" ref={bedRef} required></input>
            </div>
            <div className="form-group">
                <label>Number of bathrooms</label>
                <input type="number" className="form-control" min = "1" step="0.5" placeholder="1" ref={bathRef} required></input>
            </div>
            <div className="form-group">
                <label>Monthly Rent USD</label>
                <input type="number" className="form-control" min = "100" step="5" placeholder="1400" ref={priceRef} required></input>
            </div>
            <label>Upload an image</label><br/>
            <div className="form-control">
                <input type="file" class="form-control-file"  ref={imageRef} />
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-primary" value="Add Listing" onClick={handleAddListing}></input>
            </div>
        </form>
    </div>
    )
}
