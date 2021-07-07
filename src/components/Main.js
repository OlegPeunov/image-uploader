import React from 'react';
import newApi from '../utils/api';
import Card from "./Card";
import { CurrentUserContext } from '../contexts/CurrentUserContext';



function Main (props) {
  const userInfo = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);
  

  React.useEffect(() => {

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

  }, []); 

  function handleCardDelete(event){

    if (window.confirm("Вы действительно хотите удалить эту карточку?")) { 
      const card = event.target.closest('.place-card');
      card.parentElement.removeChild(card);
      
      newApi.deleteCard(card)
        .then(()=>{
          
          
          
        })
        .catch((err)=>{
          console.log(err)
        })
    } 

    
  }



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
        {cards.map(({likes, _id, link, name})=>{
          return(

            <Card onCardDelete={handleCardDelete}  onCardClick={props.onCard} likes={likes} _id={_id} link={link} name={name} key={_id}/>
       
          ) 
        })}
      </div>
      
    </>
  );
}
    
export default Main;