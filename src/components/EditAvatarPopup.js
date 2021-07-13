import React from 'react';
import PopupWithForm from './PopupWithForm';


function EditAvatarPopup(props){

  const avatarRef = React.useRef()
  

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(avatarRef.current.value)    /* Стандартный аватар https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg  */
  }


  return(
    <PopupWithForm name='popup popup-type-avatar' title='Обновить автар' id="formAvatar" isOpen = {props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <form className="popup__form" noValidate name="avatr" onSubmit={handleSubmit}>
        <input type="url" id="link" name="link" className="popup__input popup__input_type_link-url" required minLength="2" placeholder="Ссылка на автар"  ref={avatarRef} />
        <span id="error-edit-name" className="error-message"></span>
        <button id="edit-button" className="button popup__button button-active" name='save'>Сохранить</button>
      </form>
    </PopupWithForm>

  );
}


export default EditAvatarPopup
;