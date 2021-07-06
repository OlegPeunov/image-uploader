export default class FormValidator{
  constructor(formEvent) {
    this.formEvent = formEvent;

  }

  checkInputValidity(inputField){
    const errorElement = document.querySelector(`#error-${event.target.id}`);
    console.log(errorElement)
    if (!inputField.checkValidity()){
      if(inputField.validity.typeMismatch){
        errorElement.textContent = 'Здесь должна быть ссылка';
        
      } else if (inputField.value.length===0){
        errorElement.textContent = 'Это обязательное поле';
        
        
      } else if ( inputField.value.length===1){
        errorElement.textContent = 'Должно быть от 2 до 30 символов'
        
      } 
      return false;
    };
    
    if (inputField.checkValidity){
      errorElement.textContent = ''
      return true;
    }
  }
  setSubmitButtonState(submitButton, isValid){
    if (!isValid) {
      submitButton.classList.remove('button-active')
      submitButton.setAttribute('disabled', 'true')
    } else {
      submitButton.classList.add('button-active')
      submitButton.removeAttribute('disabled')
    }
  }
  validateForm(event, submitButton){
    const inputs = Array.from(event.currentTarget.querySelectorAll('input'))
    const isValid = inputs.every((input) => input.validity.valid); 
    this.checkInputValidity(event.target);
    this.setSubmitButtonState(submitButton, isValid);
  }

  setEventListeners(){
    const submitButton = this.formEvent.querySelector('button');
    
    this.formEvent.addEventListener('input', (evt) => {
      this.validateForm(evt, submitButton);
    });
  }
}
