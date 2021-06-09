import '../index.css'
import React from 'react';
import Header from './Header';
import Main from './Main';
;
const container = document.querySelector('.root');


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  console.log(isEditProfilePopupOpen)



  function handleAddPlaceClick(){

    
    
    const newform = container.querySelector('#newPlace');
    newform.classList.add('popup_is-opened')
    
  }

  
  function handleEditProfileClick(){

    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
    console.log(isEditProfilePopupOpen)
    // const form = container.querySelector('#formEdit');

    // form.classList.add('popup_is-opened')
  }
  



  return (
    <>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace ={handleAddPlaceClick} isEditProfilePopupOpen/>
      
    </>
  );
}



export default App;

