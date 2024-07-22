import React from 'react';
import friar_logo from '../../assets/friar-logo.png'
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={friar_logo} alt={"friars logo"} />
      </div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>Category</li>
          <li>Trending News</li>
          <li>Recent News</li>
          <li>Clubs Ranking</li>
          <li>Sports Article</li>
        </ul>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
    </header>
  );
}

export default Header;
