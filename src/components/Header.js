import React from 'react';
import logoPath from '../images/logo.svg'

function Header() {
  return (
    <header className="header root__section">
      <img alt="mesto logo" className="logo" src={logoPath}/>
    </header>
  );
}
  
export default Header;