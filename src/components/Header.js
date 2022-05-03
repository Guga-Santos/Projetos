import React from 'react';
import starWars from '../images/starWars.png';

export default function Header() {
  return (
    <div className="header-container">
      <img src={ starWars } alt="starwars logo" className="imagem" />
    </div>
  );
}
