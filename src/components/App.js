import '../index.css'
import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';




function App() {


  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  
  function handleAddPlaceClick(){
    setIsAddPlacePopupOpen(true)

  }

  
  function handleEditProfileClick(){

    setIsEditProfilePopupOpen(true)
  
    
  }
  
  function closeAllPopups(){
    setIsAddPlacePopupOpen(false)
    setIsEditProfilePopupOpen(false)
  }


  return (
    <>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace ={handleAddPlaceClick}/>

      <PopupWithForm name='popup popup-type-edit' title='Редактировать профиль' id="formEdit" isOpen = {isEditProfilePopupOpen} onClose={closeAllPopups}>
        <form className="popup__form" noValidate name="edit">
          <input type="text" id="edit-name" name="name" className="popup__input popup__input_type_name" required minLength="2" maxLength="30" value="Jacques Cousteau"/>
          <span id="error-edit-name" className="error-message"></span>
          <input type="text" id="job" name="job" className="popup__input popup__input_type_link-url" required minLength="2" maxLength="30" value="Sailor, Researcher"/>
          <span id="error-job" className="error-message"></span>
          <button id="edit-button" className="button popup__button button-active"  name='save'>Сохранить</button>
        </form>
      </PopupWithForm>
      <PopupWithForm  name='popup' title='Новое место' id="newPlace" isOpen = {isAddPlacePopupOpen} onClose={closeAllPopups}>
        <form className="popup__form" noValidate name="new">
          <input type="text" id="popup-name" name="name" className="popup__input popup__input_type_name" required minLength="2" maxLength="30" placeholder="Название" value=""/>
          <span id="error-popup-name" className="error-message"></span>
          <input type="url" id="link" name="link" className="popup__input popup__input_type_link-url" required minLength="2" placeholder="Ссылка на картинку" value=""/>
          <span id="error-link" className="error-message"></span>
          <button id="popup-button" className="button popup__button" disabled>+</button>
        </form>
      </PopupWithForm>
    </>
  );
}



export default App;

