import React from 'react';
import closePath from '../images/close.svg'




function PopupWithForm(props) {
 
  const className = `${props.name} ${props.isOpen? 'popup_is-opened':''}`
  return (
    <div className={className}   id={props.id}>
      <div className="popup__content">
        <img alt="" src={closePath} className="popup__close" onClick={props.onClose}/>
        <h3 className="popup__title">{`${props.title}`}</h3>

        {props.children}

      </div>
    </div>
  );
}
    
export default PopupWithForm;