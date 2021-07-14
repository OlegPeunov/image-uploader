import '../index.css'
import newApi from '../utils/api';
import React from 'react';
import Header from './Header';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import ImagePopup from './ImagePopup';
import AddPlacePopup from './AddPlacePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
  const [currentUser, setCurrentUser] = React.useState('');
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
    newApi.getUserInfo()
      .then((res)=>{
        setCurrentUser(res)
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

  }, []); 
  

  

  function handleCardClick(link){
    setSelectedCard(link)

  }

  
  function handleAddPlaceClick(){
    setIsAddPlacePopupOpen(true)

  }

  
  function handleEditProfileClick(){

    setIsEditProfilePopupOpen(true)
    

  }

  function handleEditAvatarClick(){

    setIsEditAvatarPopupOpen(true)
    
    
  }
  
  function closeAllPopups(){
    setIsAddPlacePopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setSelectedCard(false)
    setIsEditAvatarPopupOpen(false)
  }


  function handleUpdateUser(name, about){
    
    newApi.patchUserData(name, about)
    .then(()=>{
      closeAllPopups()
      setCurrentUser({...currentUser, name: name, about: about})  
    })
    .catch((err)=>{
      console.log(err)
    })

  }

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

  function handleAddPlaceSubmit(name, link) {
    newApi.postNewCard(name, link)
      .then((res)=>{  
        closeAllPopups()
        setCards([...cards, res]);
      })
      .catch((err)=>{
        console.log(err)
      })
  }


  function handleUpdateAvatar (avatarLink){

    
    newApi.setUserAvatar(avatarLink)
      .then((res)=>{ 
        setCurrentUser({...currentUser, avatar: avatarLink})  
        closeAllPopups()
        
      })
      .catch((err)=>{
        console.log(err)
      })

  }



  return (
    <>
      <CurrentUserContext.Provider value={currentUser} >
        <Header />
        
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace ={handleAddPlaceClick} onCard={handleCardClick} handleCardDelete={handleCardDelete} cards={cards}/>

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/> 

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser }/>

        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>

        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        
      </CurrentUserContext.Provider>
    </>
  );
}



export default App;

