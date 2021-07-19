import React, { useState } from 'react';
import RestaurantFinder from '../APIs/RestaurantFinder'
import { useParams, useHistory, useLocation } from 'react-router-dom';

const AddReview = () => {
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();
  const [name, setName] = useState("")
  const [reviewText, setReviewText] = useState("")
  const [rating, setRating] = useState("Rating")

  const handleSubmitReview = async (event) => {
    event.preventDefault();
    try {
      await RestaurantFinder.post(`/${id}/addReview`, {
        name,
        review: reviewText,
        rating,
      })

      history.push("/")
      history.push(location.pathname)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="mb-2">
      <form>
        <div className="row">
          <div className="form-group col-8 mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={event => setName(event.target.value)}
              placeholder="Name" />
          </div>
          <div className="form-group col-4 mb-3">
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              className="form-select"
              value={rating}
              onChange={event => setRating(event.target.value)}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="review">Review</label>
          <textarea
            id="review"
            className="form-control"
            value={reviewText}
            onChange={event => setReviewText(event.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitReview}
        > Submit</button>
      </form>
    </div>
  )
}

export default AddReview
