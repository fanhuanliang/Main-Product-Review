import React from 'react';
import Review from '../ReviewView/ReviewView.jsx';
import './ReviewsView.scss';

const Reviews = (props) => {
  return (
    <div className='reviews'>
      {props.reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </div>
  );
};

export default Reviews;