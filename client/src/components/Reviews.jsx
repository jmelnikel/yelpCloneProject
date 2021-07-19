import React from 'react'
import StarRating from './StarRating'

const Reviews = ({ reviews }) => {


  return (
    <div className="row row-cols-3 mb-2">
      {reviews.map(reviewItem => {
        const { id, name, rating, review } = reviewItem;

        return (
          <div
            key={id}
            className="card text-white bg-primary mb-3 mx-3"
            style={{ maxWidth: "30%" }}
          >
            <div className="card-header d-flex justify-content-between">
              <span>{name}</span>
              <span><StarRating rating={rating} /></span>
            </div>
            <div className="card-body">
              <p className="card-text">{review}</p>
            </div>
          </div>
        )
      })}


      {/* <div className="card text-white bg-primary mb-3 mx-3" style={{ maxWidth: "30%" }}>
        <div className="card-header d-flex justify-content-between">
          <span>jason</span>
          <span><StarRating rating={3} /></span>
        </div>
        <div className="card-body">
          <p className="card-text">The review.</p>
        </div>
      </div>
      <div className="card text-white bg-primary mb-3 mx-3" style={{ maxWidth: "30%" }}>
        <div className="card-header d-flex justify-content-between">
          <span>jason</span>
          <span><StarRating rating={3} /></span>
        </div>
        <div className="card-body">
          <p className="card-text">The review.</p>
        </div>
      </div>
      <div className="card text-white bg-primary mb-3 mx-3" style={{ maxWidth: "30%" }}>
        <div className="card-header d-flex justify-content-between">
          <span>jason</span>
          <span><StarRating rating={3} /></span>
        </div>
        <div className="card-body">
          <p className="card-text">The review.</p>
        </div>
      </div>
      <div className="card text-white bg-primary mb-3 mx-3" style={{ maxWidth: "30%" }}>
        <div className="card-header d-flex justify-content-between">
          <span>jason</span>
          <span><StarRating rating={3} /></span>
        </div>
        <div className="card-body">
          <p className="card-text">The review.</p>
        </div>
      </div> */}


    </div>
  )
}

export default Reviews
