import React from 'react'
import PopupWithForm from './PopupWithForm';
import validateForm from '../utils/formValidator'

function AddPlacePopup (props){
  
  const [name, setName] = React.useState('')
  const [link, setLink] = React.useState('')
  
  const [errorName, setErrorName] = React.useState('')
  const [errorLink, setErrorLink] = React.useState('')

  const [isvalidName, setIsvalidName] = React.useState(false)
  const [isvalidLink, setIsvalidLink] = React.useState(false)

  let buttonClassName= `button popup__button ${ isvalidName && isvalidLink ? 'button-active' : ''}`    

  function handleNameChange(e){
    setName(e.target.value)
    setIsvalidName(e.target.validity.valid)
    setErrorName(validateForm(e))
  }

  function handleLinkChange(e){
    setLink(e.target.value)
    setErrorLink(validateForm(e))
    setIsvalidLink(e.target.validity.valid)
  }

  function handleSubmit(e){

    e.preventDefault();
    props.onAddPlace(name, link);
    setName('')
    setLink('')
    setIsvalidName(false)
    setIsvalidLink(false)
  }

  return(
    
    <PopupWithForm  name='popup' title='Новое место' id="newPlace" isOpen = {props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <form className="popup__form" noValidate name="new" onSubmit={handleSubmit}>
        <input type="text" id="popup-name" name="name" className="popup__input popup__input_type_name" required minLength="2" maxLength="30" placeholder="Название" value={name} onChange={handleNameChange}/>
        <span id="error-popup-name" className="error-message">{errorName}</span>
        <input type="url" id="link" name="link" className="popup__input popup__input_type_link-url" required minLength="2" placeholder="Ссылка на картинку" value={link} onChange={handleLinkChange}/>
        <span id="error-link" className="error-message">{errorLink}</span>
        <button id="popup-button" className={buttonClassName} disabled={!isvalidName || !isvalidLink }>+</button>
      </form>
    </PopupWithForm>
  );
}


export default AddPlacePopup;