import React from 'react'
import PopupWithForm from './PopupWithForm';

function AddPlacePopup (props){
  
  const [name, setName] = React.useState('')
  const [link, setLink] = React.useState('')

  function handleNameChange(e){
    setName(e.target.value)
  }

  function handleLinkChange(e){
    setLink(e.target.value)
  }

  function handleSubmit(e){

    e.preventDefault();
    props.onAddPlace(name, link);

  }

  return(
    
    <PopupWithForm  name='popup' title='Новое место' id="newPlace" isOpen = {props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <form className="popup__form" noValidate name="new" onSubmit={handleSubmit}>
        <input type="text" id="popup-name" name="name" className="popup__input popup__input_type_name" required minLength="2" maxLength="30" placeholder="Название" value={name} onChange={handleNameChange}/>
        <span id="error-popup-name" className="error-message"></span>
        <input type="url" id="link" name="link" className="popup__input popup__input_type_link-url" required minLength="2" placeholder="Ссылка на картинку" value={link} onChange={handleLinkChange}/>
        <span id="error-link" className="error-message"></span>
        <button id="popup-button" className="button popup__button" >+</button>
      </form>
    </PopupWithForm>
  );
}


export default AddPlacePopup;