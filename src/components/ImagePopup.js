import React from 'react';
import closePath from '../images/close.svg'


function ImagePopup(props) {

  const className = `${`image-wrap`} ${props.card ? 'image-wrap_is-opened':''}`

  return (
    <div className={className} >
      <div className ='image__content'>
        <img className='popupImage' alt="" src={props.card.toString()}/>
        <img src={closePath} alt="" className="popupImage__close" onClick={props.onClose}/>
      </div>
    </div>
  );
}
    
export default ImagePopup;