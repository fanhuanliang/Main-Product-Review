import React from 'react';
import './WriteReview.scss';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
};

export default function WriteReview(props) {
  if (!props.open) return null;
  return (
    <div className='top-layer'>
      <div className='bottom-layer'>
        <button type='button' onClick={props.onClose}>Close</button>
        <div>To be continue</div>
      </div>
    </div>
  );
}
