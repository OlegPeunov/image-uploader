import React from 'react';
import ImagePopup from './ImagePopup';
import newApi from '../utils/api';
import Card from "./Card";




function Main (props) {
  
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription ] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  

  React.useEffect(()=>{
    newApi.getUserInfo()
      .then((res)=>{
        setUserName(res.name)
        setUserDescription(res.about)
        setUserAvatar(res.avatar)
        
      })
      .catch((err)=>{
        console.log(err)
      })


    

    newApi.getCards()
      .then((cardsApi)=>{
        const date = cardsApi.map((el)=>{
          return({likes: el.likes, _id: el._id, link: el.link, name: el.name, owner: el.owner})
        })
        
        setCards([...date])

      })
    .catch((err)=>{
      console.log(err)
    })

  }, [])

  

  return (
    <>
      <div className="profile root__section">
        <div className="user-info">
          <img alt="avatar" className="user-info__photo" src={userAvatar}/>
          <div className="user-info__data">
            <h1 className="user-info__name">{userName}</h1>
            <p className="user-info__job">{userDescription}</p>
            <button className="button user-info__edit-button" onClick={props.onEditProfile}  name="popup_is-opened" title="Новое место">Edit</button>
          </div>
          <button className="button user-info__button" onClick={props.onAddPlace}>+</button>
        </div>
      </div>

      <div className="places-list root__section">
        {cards.map(({likes, _id, link, name, owner})=>{
          return(
            <Card likes={likes} _id={_id} link={link} name={name}/>           
          ) 
        })}
      </div>

      

      <ImagePopup />
    </>
  );
}
    
export default Main;