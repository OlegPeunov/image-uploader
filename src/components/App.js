import '../index.css'
import newApi from '../utils/api';
import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup'
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
  const [currentUser, setCurrentUser] = React.useState('');
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(false);

  
  React.useEffect(() => {
    newApi.getUserInfo()
      .then((res)=>{
        setCurrentUser(res)
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
  
  function closeAllPopups(){
    setIsAddPlacePopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setSelectedCard(false)
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


  return (
    <>
      <CurrentUserContext.Provider value={currentUser} >
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace ={handleAddPlaceClick} onCard={handleCardClick}/>

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser }/>

        <PopupWithForm  name='popup' title='Новое место' id="newPlace" isOpen = {isAddPlacePopupOpen} onClose={closeAllPopups}>
          <form className="popup__form" noValidate name="new">
            <input type="text" id="popup-name" name="name" className="popup__input popup__input_type_name" required minLength="2" maxLength="30" placeholder="Название" value=""/>
            <span id="error-popup-name" className="error-message"></span>
            <input type="url" id="link" name="link" className="popup__input popup__input_type_link-url" required minLength="2" placeholder="Ссылка на картинку" value=""/>
            <span id="error-link" className="error-message"></span>
            <button id="popup-button" className="button popup__button" disabled>+</button>
          </form>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </>
  );
}



export default App;

