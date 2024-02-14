import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
    <header>
        <h2 id='logo'>Gamez</h2>
      <ul>
        <li><Link className='link' to='/home'>Home</Link></li>
        <li><Link className='link' to='/games'>Games</Link></li>
        <li><Link className='link' to='/guess'>Guess</Link></li>
        <li><Link className='link' to='/dice'>Dice</Link></li>
      </ul>
    </header>
      <div className='line'></div>
    </>
  )
}

export default Header