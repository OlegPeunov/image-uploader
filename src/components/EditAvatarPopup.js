import React from 'react';
import PopupWithForm from './PopupWithForm';
import validateForm from '../utils/formValidator'



function EditAvatarPopup(props){

  const avatarRef = React.useRef()
  const [errorLink, setErrorLink] = React.useState('')
  const [isvalidLink, setIsvalidLink] = React.useState(false)

  function handleLinkChange(e){
    setErrorLink(validateForm(e))
    setIsvalidLink(e.target.validity.valid)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(avatarRef.current.value)    /* Стандартный аватар https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg  */
    setIsvalidLink(false)
    avatarRef.current.value=''
  }


  return(
    <PopupWithForm name='popup popup-type-avatar' title='Обновить автар' id="formAvatar" isOpen = {props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <form className="popup__form" noValidate name="avatr" onSubmit={handleSubmit}>
        <input type="url" id="link" name="link" className="popup__input popup__input_type_link-url" required minLength="2" placeholder="Ссылка на автар"  ref={avatarRef} onChange={handleLinkChange}/>
        <span id="error-edit-name" className="error-message">{errorLink}</span>
        <button id="edit-button" className={`button popup__button ${isvalidLink? 'button-active' : ''}`} name='save' disabled={!isvalidLink}>Сохранить</button>
      </form>
    </PopupWithForm>

  );
}


export default EditAvatarPopup
;