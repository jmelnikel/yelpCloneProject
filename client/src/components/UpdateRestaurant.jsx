import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import RestaurantFinder from '../APIs/RestaurantFinder'

const UpdateRestaurant = (props) => {
  const { id } = useParams();
  let history = useHistory();
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [priceRange, setPriceRange] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);
      const { name, location, price_range } = response.data.data.restaurant
      setName(name)
      setLocation(location)
      setPriceRange(price_range)
    };

    fetchData();
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updateRestaurant = await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });
    history.push("/");
  }


  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          className="form-control"
          value={location}
          onChange={event => setLocation(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price_range">Price Range</label>
        <input
          type="number"
          id="price_range"
          className="form-control"
          value={priceRange}
          onChange={event => setPriceRange(event.target.value)}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleSubmit}
      >Submit</button>
    </form>
  )
}

export default UpdateRestaurant
