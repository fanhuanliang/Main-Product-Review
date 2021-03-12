import React from 'react';
import Review from './ReviewView.jsx';

const Reviews = (props) => {
  // console.log(props);
  return (
    <div id='review'>
      {props.reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </div>
  );
};

export default Reviews;