/* eslint-disable react/no-array-index-key */
import React from 'react';
import Rating from '../Rating/Rating.jsx';
import LikeDislike from '../LikeDislike.jsx';
import DisplayParagraph from '../DisplayParagraph.jsx';
import Image from '../Image.jsx';
import './ReviewView.scss';

function ConvertMinutes(num) {
  const d = Math.floor(num / 1440);
  const h = Math.floor((num - (d * 1440)) / 60);
  const m = Math.round(num % 60);

  if (d > 0) {
    return `${d} days, ${h} hours, ${m} minutes`;
  }
  return `${h} hours, ${m} minutes`;
}

const Review = (props) => {
  const { id, date_create, age, build_time, building_experience, content, helpful_no, helpful_yes, image1, image2, image3, lego_reply, level_difficulty, overall_rate, play_experience, purchase_for, recommend, title, username, value_for_money } = props.review;
  const starRating = { 'star': overall_rate };
  const newRating = overall_rate.toFixed(1);
  const ageDisplay = ['14-18', '19-24', '25-34', '35-44', '45-54', '55-64', '65 Or Older'];
  const recommendToFriend = ['', 'I would recommend this to a friend!'];
  const buildTime = ConvertMinutes(build_time);
  const buildExperience = ['Novice LEGO Builder', 'Intermediate LEGO Builder', 'Advanced LEGO Builder', 'Expert LEGO Builder'];

  return (
    <div className='each-review'>
      <div className='review-left'>
        <div className='date'>{date_create}</div>
        <div className='rating'>
          <Rating value={starRating} />
          <span>{newRating}</span>
        </div>
        <h3 className='title'>{title}</h3>
        <div className='user'>
          <span className='userName'>{username}</span>
          <span> | </span>
          {ageDisplay[age - 1]}
        </div>
        <p className='recommend-review'>
          {recommendToFriend[recommend]}
        </p>
        <div className='purchase'>
          <span className='purchased'>Purchased For:</span>
          <span>{' '}</span>
          <span>{purchase_for}</span>
        </div>
        <DisplayParagraph content={content} />
        <div className='images'>
          {[image1, image2, image3].map((img, index) => <Image img={img} key={index} />)}
        </div>
        <div className='helpful'>
          <p>Was this helpful?</p>
          <LikeDislike helpful_yes={helpful_yes} helpful_no={helpful_no} id={id} />
        </div>
      </div>
      <div className='review-right'>
        <div className='brickRating'>
          <p>Play Experience</p>
          <div className='brick_rating'>
            <Rating value={play_experience} />
            <span className='rate_number'>{play_experience}</span>
          </div>
          <p>Level of Difficulty</p>
          <div className='brick_rating'>
            <Rating value={level_difficulty} />
            <span className='rate_number'>{level_difficulty}</span>
          </div>
          <p>Value for Money</p>
          <div className='brick_rating'>
            <Rating value={value_for_money} />
            <span className='rate_number'>{value_for_money}</span>
          </div>
        </div>
        <p>
          Build Time:
          {buildTime}
        </p>
        <p className='experience'>
          <span>Building Experience:</span>
          {buildExperience[building_experience - 1]}
        </p>
      </div>
    </div>
  );
};

export default Review;