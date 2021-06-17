import React from 'react';

function Card(props) {
    return (
      <div className="place-card" id={props._id}>
        <div className="place-card__image" style={{ backgroundImage: `url(${props.link})` }} >
          <button className="place-card__delete-icon"></button>
        </div>
        <div className="place-card__description">
          <h3 className="place-card__name">{props.name}</h3>

          <div className="place-card__descriptionBox">
          <button className="place-card__like-icon"></button>
          <p className="place-card__likesAmount">{props.likes.length}</p>
          </div>
            
        </div>
      </div>
    );
  }
    
  export default Card;