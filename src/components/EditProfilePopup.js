import React from 'react'
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function EditProfilePopup (props){
  const userInfo = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(userInfo.name)
  const [description, setDescription] = React.useState(userInfo.about)

  React.useEffect(() => {
    setName(userInfo.name);
    setDescription(userInfo.about);
  }, [userInfo]);



  function handleUserChange(e){
    setName(e.target.value);
  }

  function handleJobChange(e){
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser(name, description);
  }




  return(
    <PopupWithForm name='popup popup-type-edit' title='Редактировать профиль' id="formEdit" isOpen = {props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <form className="popup__form" noValidate name="edit" onSubmit={handleSubmit}>
        <input type="text" id="edit-name" name="name" className="popup__input popup__input_type_name" required minLength="2" maxLength="30" value={name} onChange={handleUserChange}/>
        <span id="error-edit-name" className="error-message"></span>
        <input type="text" id="job" name="job" className="popup__input popup__input_type_link-url" required minLength="2" maxLength="30" value={description} onChange={handleJobChange}/>
        <span id="error-job" className="error-message"></span>
        <button id="edit-button" className="button popup__button button-active"  name='save'>Сохранить</button>
      </form>
    </PopupWithForm>

  );
}


export default EditProfilePopup;