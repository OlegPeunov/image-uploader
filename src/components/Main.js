import React from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';





function Main (props) {
  
  return (
    <>
      <div className="profile root__section">
        <div className="user-info">
          <div className="user-info__photo"></div>
          <div className="user-info__data">
            <h1 className="user-info__name">Жак ив Кусто</h1>
            <p className="user-info__job">Исследователь океана</p>
            <button className="button user-info__edit-button" onClick={props.onEditProfile}  name="popup_is-opened" title="Новое место">Edit</button>
          </div>
          <button className="button user-info__button" onClick={props.onAddPlace}>+</button>
        </div>
      </div>

      <div className="places-list root__section">
      </div>

      <PopupWithForm name='popup popup-type-edit' title='Редактировать профиль' id="formEdit" onClose={props.onClose} isOpen = {props.isEditProfilePopupOpen}>
        <form className="popup__form" noValidate name="edit">
          <input type="text" id="edit-name" name="name" className="popup__input popup__input_type_name" required minLength="2" maxLength="30" value="Jacques Cousteau"/>
          <span id="error-edit-name" className="error-message"></span>
          <input type="text" id="job" name="job" className="popup__input popup__input_type_link-url" required minLength="2" maxLength="30" value="Sailor, Researcher"/>
          <span id="error-job" className="error-message"></span>
          <button id="edit-button" className="button popup__button button-active"  name='save'>Сохранить</button>
        </form>
      </PopupWithForm>
      <PopupWithForm  name='popup' title='Новое место' id="newPlace" isOpen = {props.isAddPlacePopupOpen} onClose={props.onClose}>
        <form className="popup__form" noValidate name="new">
          <input type="text" id="popup-name" name="name" className="popup__input popup__input_type_name" required minLength="2" maxLength="30" placeholder="Название" value=""/>
          <span id="error-popup-name" className="error-message"></span>
          <input type="url" id="link" name="link" className="popup__input popup__input_type_link-url" required minLength="2" placeholder="Ссылка на картинку" value=""/>
          <span id="error-link" className="error-message"></span>
          <button id="popup-button" className="button popup__button" disabled>+</button>
        </form>
      </PopupWithForm>

      <ImagePopup />
    </>
  );
}
    
export default Main;