import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Listings from './components/Listings';
import AddListing from './components/AddListing';
import ListingDetails from './components/ListingDetails';
const listings1=[
  {
    address: "123 Main Street",
    bed: 3, 
    bath: 1.5,
    price: 1400,
    isAvailable: true
  },
  {
    address: "987 Market Street",
    bed: 2, 
    bath: 1,
    price: 1450,
    isAvailable: false
  },
]
function App() {
  const [listings, setListings] = useState(listings1);
  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-md navbar-dark  bg-dark">
        <Link className="navbar-brand" to="/">Realtor</Link>
        <ul className='navbar-nav mr-auto'>
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/listings">Listings</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/add-listing">Add Listing</Link>
          </li>
          <div className="user-nav">
          <li><Link className="nav-link text-white" to="/login">Login</Link></li>
        <li><Link className="nav-link text-white" to="/signup">Sign up</Link></li>
        </div>
        </ul>

      </nav>
      <Switch>
        <Route path="/listings/:id">
          <ListingDetails listings={listings}></ListingDetails>
        </Route>
        <Route path="/listings">
          <Listings listings={listings} setListings={setListings}/>
        </Route>
        <Route path="/add-listing">
          <AddListing listings={listings} setListings={setListings}/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
