import React from 'react';


function Card(props) {
  const [isLiked, setIsLiked] = React.useState(false);
  const [likesAmount, setLikesAmount] = React.useState(props.likes.length);

  const classNameLike = `${'place-card__like-icon'} ${isLiked ? 'place-card__like-icon_liked':''}`

  function handleClick(event) {
    if(event.target.classList.value !== 'place-card__delete-icon'){
      props.onCardClick(props.link);
    }
  }
  
  
  function like() {
    
    setIsLiked(!isLiked)
    if(classNameLike === 'place-card__like-icon place-card__like-icon_liked'){
      setLikesAmount(likesAmount-1)
    }else(
      setLikesAmount(likesAmount+1)
    )

  } 

  return (
    <div className="place-card" id={props._id}>
      <div className="place-card__image" style={{ backgroundImage: `url(${props.link})` }} onClick={handleClick}>
        <button className="place-card__delete-icon" onClick={props.onCardDelete} ></button>
      </div>
      <div className="place-card__description">
        <h3 className="place-card__name">{props.name}</h3>

        <div className="place-card__descriptionBox">
        <button className={classNameLike} onClick={like}></button>
        <p className="place-card__likesAmount">{likesAmount}</p>
        </div>
          
      </div>
    </div>
  );
  }
    
  export default Card;