
import '../index.css'
import logoPath from '../images/logo.svg'

function App() {
  return (
    <>
      <header className="header root__section">
        <img alt="mesto logo" class="logo" src={logoPath}/>
      </header>
      <div className="profile root__section">
        <div className="user-info">
          <div className="user-info__photo"></div>
          <div className="user-info__data">
            <h1 className="user-info__name">Жак ив Кусто</h1>
            <p className="user-info__job">Исследователь океана</p>
            <button className="button user-info__edit-button">Edit</button>
          </div>
          <button className="button user-info__button">+</button>
        </div>
      </div>
      <div className="places-list root__section">
      </div>

      <div class="popup">
        <div class="popup__content">
          <img src="<%=require('./images/close.svg').default%>" alt="" class="popup__close"/>
          <h3 class="popup__title">Новое место</h3>
          <form class="popup__form" novalidate name="new">
              <input type="text" id="popup-name" name="name" class="popup__input popup__input_type_name" required minlength="2" maxlength="30" placeholder="Название" value=""/>
              <span id="error-popup-name" class="error-message"></span>
              <input type="url" id="link" name="link" class="popup__input popup__input_type_link-url" required minlength="2" placeholder="Ссылка на картинку" value=""/>
              <span id="error-link" class="error-message"></span>
              <button id="popup-button" class="button popup__button" disabled>+</button>
          </form>
        </div>
      </div>
  
      <div class="popup popup-type-edit">
        <div class="popup__content">
          <img src="<%=require('./images/close.svg').default%>" alt="" class="popup__close popup-edit__close"/>
          <h3 class="popup__title">Редактировать профиль</h3>
          <form class="popup__form" novalidate name="edit">
              <input type="text" id="edit-name" name="name" class="popup__input popup__input_type_name" required minlength="2" maxlength="30" value="Jacques Cousteau"/>
              <span id="error-edit-name" class="error-message"></span>
              <input type="text" id="job" name="job" class="popup__input popup__input_type_link-url" required minlength="2" maxlength="30" value="Sailor, Researcher"/>
              <span id="error-job" class="error-message"></span>
              <button id="edit-button" class="button popup__button button-active"  name='save'>Сохранить</button>
          </form>
        </div>
      </div>




      <div className="image-wrap">
        <div className ='image__content'>
          <img className='popupImage' alt=""/>
          <img src="./images/close.svg" alt="" className="popupImage__close"/>
        </div>
      </div>
    </>
  
  );
}

export default App;

