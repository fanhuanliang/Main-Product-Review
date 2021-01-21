import React from 'react';
import ReactDOM from 'react-dom';
import Rating from './Rating.jsx';

const Review = (props) => {
  console.log(props.review);
  const { date_create, age, build_time, building_experience, content, helpful_no, helpful_yes, image1, image2, image3, lego_reply, level_difficulty, overall_rate, play_experience, purchase_for, recommend, title, username, value_for_money} = props.review;
  const starRating = { 'star': overall_rate };
  const newRating = overall_rate.toFixed(1);
  return (
    <div>
      <div className='date'>{date_create}</div>
      <div className='star'>
        <Rating value={starRating} />
        {newRating}
      </div>
    </div>
  );
};

export default Review;