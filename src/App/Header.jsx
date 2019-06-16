import React from 'react';
import './Header.css';

function Header({name, description}) {

  return (
      <header className="header">
        <p>{name}</p>
        <small>{description}</small>
      </header>
  );
}

export default Header;