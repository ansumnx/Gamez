import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import './Games.css';

const Games = () => {
  let play = "Play";
  return (
    <div className="gamez"> 
     <div className="guess">
      <h1>🔢 Guess Game</h1>
      <p>Think you've got a knack for numbers? Put your skills to the test in our Guessing Number Game. Sharpen your
        intuition, analyze the clues, and make your best guess. It's a game where you test your luck.</p>
      <Link className="g" to='/guess'>
          <img src="./guess.jpg" alt="Guess-game" />
        <Button btn={play} />
      </Link>
    </div>
      <div className="dice">
        <h1>🎲 Dice Game</h1>
        <p>Roll the virtual dice and let the excitement unfold! Whether you're a strategic mastermind or a risk-taking
          adventurer, our dice game offers an exhilarating experience for players of all levels.
        </p>
        <Link className="d" to='/dice'>
        <img src="./dice.png" alt="Dice-game" />
          <Button btn={play} />
        </Link>
      </div>


    </div>
  )
}

export default Games;
