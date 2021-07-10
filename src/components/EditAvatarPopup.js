import React from 'react';
import PopupWithForm from './PopupWithForm';


function EditAvatarPopup(props){
  



  return(
    <PopupWithForm name='popup popup-type-avatar' title='Обновить автар' id="formAvatar" isOpen = {props.isOpen} onClose={props.onClose} >
      <form className="popup__form" noValidate name="avatr">
        <input type="url" id="link" name="link" className="popup__input popup__input_type_link-url" required minLength="2" placeholder="Ссылка на автар" value=''/>
        <span id="error-edit-name" className="error-message"></span>
        <button id="edit-button" className="button popup__button button-active" name='save'>Сохранить</button>
      </form>
    </PopupWithForm>

  );
}


export default EditAvatarPopup
;