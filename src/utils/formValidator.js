function validateForm(event){
  const inputField =event.target
    if (!inputField.checkValidity()){
      if(inputField.validity.typeMismatch){
        return 'Здесь должна быть ссылка';
        
      } else if (inputField.value.length===0){
        return 'Это обязательное поле';
        
        
      } else if ( inputField.value.length===1){
        return 'Должно быть от 2 до 30 символов'
        
      } 
      return false;
    };
    
    if (inputField.checkValidity){
        return ' ';
    }
}

export default validateForm;