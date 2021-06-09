import '../index.css'
import React from 'react';
import Header from './Header';
import Main from './Main';
;
const container = document.querySelector('.root');


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
      <Main onEditProfile={handleEditProfileClick} onAddPlace ={handleAddPlaceClick} isEditProfilePopupOpen ={isEditProfilePopupOpen} isAddPlacePopupOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
      
    </>
  );
}



export default App;

