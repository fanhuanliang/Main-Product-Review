/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
import React from 'react';
import Brick from './Brick.jsx';
import Star from './Star.jsx';
import './Rating.scss';

const ratingIcons = (value) => {
  switch (true) {
  case (!value):
    return [0, 0, 0, 0, 0];
  case (value > 0 && value < 1):
    return [50, 0, 0, 0, 0];
  case (value === 1):
    return [100, 0, 0, 0, 0];
  case (value > 1 && value < 2):
    return [100, 50, 0, 0, 0];
  case (value === 2):
    return [100, 100, 0, 0, 0];
  case (value > 2 && value < 3):
    return [100, 100, 50, 0, 0];
  case (value === 3):
    return [100, 100, 100, 0, 0];
  case (value > 3 && value < 4):
    return [100, 100, 100, 50, 0];
  case (value === 4):
    return [100, 100, 100, 100, 0];
  case (value > 4 && value < 5):
    return [100, 100, 100, 100, 50];
  case (value === 5):
    return [100, 100, 100, 100, 100];
  }
};

const Rating = ({ value }) => {
  if (typeof value === 'object') {
    return (
      <span className='star_rating'>
        {
          ratingIcons(parseFloat(value.star)).map((value, index) => <Star value={value} key={index} />)
        }
      </span>
    );
  }
  return (
    <span className='brick_rating'>
      {
        ratingIcons(parseFloat(value)).map((value, index) => <Brick value={value} key={index} />)
      }
    </span>
  );
};

export default Rating;