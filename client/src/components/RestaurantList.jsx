import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import RestaurantFinder from '../APIs/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext';
import StarRating from '../components/StarRating';

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  let history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/")
        setRestaurants(response.data.data.restaurants)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [])

  const handleDelete = async (event, id) => {
    event.stopPropagation();
    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      setRestaurants(restaurants.filter((restaurant) => {
        return restaurant.id !== id
      }))
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = (event, id) => {
    event.stopPropagation();
    history.push(`/restaurants/${id}/update`);
  };

  const handleRestaurantSelect = (id) => {
    history.push(`/restaurants/${id}`)
  }

  const renderRating = (restaurant) => {
    if (!restaurant.count) {
      return <span className="text-warning">0 reviews</span>
    }
    return (
      <>
        <StarRating rating={restaurant.average_rating} />
        <span className="text-warning ml-1"> ({restaurant.count})</span>
      </>
    )
  }

  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="table-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants && restaurants.map((restaurant) => {
            const { id, name, location, price_range } = restaurant;
            return (
              <tr key={id} onClick={() => handleRestaurantSelect(id)}>
                <td>{name}</td>
                <td>{location}</td>
                <td>{"$".repeat(price_range)}</td>
                <td>{renderRating(restaurant)}</td>
                <td><button
                  className="btn btn-warning"
                  onClick={(event) => handleUpdate(event, id)}
                >Update</button></td>
                <td><button
                  className="btn btn-danger"
                  onClick={(event) => handleDelete(event, id)}
                >Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div >
  )
}

export default RestaurantList
