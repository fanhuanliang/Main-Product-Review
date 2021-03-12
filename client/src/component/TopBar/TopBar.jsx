import React from 'react';
import './TopBar.scss';

const TopBar = ({ totalReviews, hiddenContent }) => {
  return (
    <button type='button' className='animation-btn' onClick={() => { hiddenContent(); }}>
      <div className='grey-bar'>
        <h2>
          Customer Reviews
          <span>
            (
            {totalReviews}
            )
          </span>
        </h2>
        <div className='icon-plus' />
      </div>
    </button>
  );
};

export default TopBar;