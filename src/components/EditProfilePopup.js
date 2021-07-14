import React from 'react'
import PopupWithForm from './PopupWithForm';
import validateForm from '../utils/formValidator'
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function EditProfilePopup (props){
  const userInfo = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(userInfo.name)
  const [description, setDescription] = React.useState(userInfo.about)

  const [errorName, setErrorName] = React.useState('')
  const [errorDescription, setErrorDescription] = React.useState('')

  const [isvalidName, setIsvalidName] = React.useState(true)
  const [isvalidDescription, setIsvalidDescription] = React.useState(true)

  let buttonClassName= `button popup__button ${ isvalidName && isvalidDescription ? 'button-active' : ''}`  

  React.useEffect(() => {
    setName(userInfo.name);
    setDescription(userInfo.about);
  }, [userInfo]);



  function handleUserChange(e){
    setName(e.target.value);
    setIsvalidName(e.target.validity.valid)
    setErrorName(validateForm(e))
  }

  function handleJobChange(e){
    console.log()
    setDescription(e.target.value);
    setIsvalidDescription(e.target.validity.valid)
    setErrorDescription(validateForm(e))
    
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser(name, description);

    setIsvalidName(true)
    setIsvalidDescription(true)
  }




  return(
    <PopupWithForm name='popup popup-type-edit' title='Редактировать профиль' id="formEdit" isOpen = {props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <form className="popup__form" noValidate name="edit" onSubmit={handleSubmit}>
        <input type="text" id="edit-name" name="name" className="popup__input popup__input_type_name" required minLength="2" maxLength="30" value={name} onChange={handleUserChange}/>
        <span id="error-edit-name" className="error-message">{errorName}</span>
        <input type="text" id="job" name="job" className="popup__input popup__input_type_link-url" required minLength="2" maxLength="30" value={description} onChange={handleJobChange}/>
        <span id="error-job" className="error-message">{errorDescription}</span>
        <button id="edit-button" className={buttonClassName}  name='save'>Сохранить</button>
      </form>
    </PopupWithForm>

  );
}


export default EditProfilePopup;