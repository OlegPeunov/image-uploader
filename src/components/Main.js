import React from 'react';
import Card from "./Card";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CurrentCardsContext } from '../contexts/CurrentCardsContext';


function Main (props) {
  const userInfo = React.useContext(CurrentUserContext);
  const cardsInfo = React.useContext(CurrentCardsContext);

  return (
    <>
      <div className="profile root__section">
        <div className="user-info">
          <img alt="avatar" className="user-info__photo" src={userInfo.avatar}/>
          <div className="user-info__data">
            <h1 className="user-info__name">{userInfo.name}</h1>
            <p className="user-info__job">{userInfo.about}</p>
            <button className="button user-info__edit-button" onClick={props.onEditProfile}  name="popup_is-opened" title="Новое место">Edit</button>
          </div>
          <button className="button user-info__button" onClick={props.onAddPlace}>+</button>
        </div>
      </div>

      <div className="places-list root__section">
        {cardsInfo.map(({likes, _id, link, name})=>{
          return(
            <Card onCardClick={props.onCard} likes={likes} _id={_id} link={link} name={name} key={_id}/>           
          ) 
        })}
      </div>
      
    </>
  );
}
    
export default Main;