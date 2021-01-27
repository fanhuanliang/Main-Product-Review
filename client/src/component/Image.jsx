import React from 'react';

const Image = ({ image1, image2, image3 }) => {
  // console.log(props);
  return (
    <div className='images'>
      <div className='img'>
        <span className='image-size'>
          <img src={image1} alt="user's upload" style={{ height: '60px', width: '60px' }} />
        </span>
        <span className='image-size'>
          <img className='img' src={image2} alt="user's upload" style={{ height: '60px', width: '60px' }} />
        </span>
        <span className='image-size'>
          <img className='img' src={image3} alt="user's upload" style={{ height: '60px', width: '60px' }} />
        </span>
      </div>
    </div>
  );
};
export default Image;