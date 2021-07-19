import React, { useState, useContext } from 'react';
import RestaurantFinder from '../APIs/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const AddRestaurant = () => {
  const { addRestaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location,
        price_range: priceRange,
      })
      addRestaurants(response.data.data.restaurant)
    } catch (error) {
      console.log(error)
    }


  }

  return (
    <div className="mb-4">
      <form>
        <div className="form-group row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={event => setName(event.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={location}
              onChange={event => setLocation(event.target.value)}
              placeholder="Location"
            />
          </div>
          <div className="col">
            <select
              className="form-select mr-sm-2"
              value={priceRange}
              onChange={event => setPriceRange(event.target.value)}
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            type="submit"
            className="col-1 btn btn-primary"
            onClick={handleSubmit}
          >Add</button>
        </div>
      </form>
    </div >
  )
};

export default AddRestaurant;
