import React from 'react';

function ImagePopup() {
  return (
    <div className="image-wrap">
      <div className ='image__content'>
        <img className='popupImage' alt=""/>
        <img src="./images/close.svg" alt="" className="popupImage__close"/>
      </div>
    </div>
  );
}
    
export default ImagePopup;