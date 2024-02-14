import React from "react";
import { useState } from "react";
import './Guess.css';

const Guess = () => {

  let [value, setvalue] = useState("");
  let [guess, setguess] = useState('');

  let guessed = () => {
    let myguess = Number(guess);
    let aiguess = Math.floor(Math.random() * 10) + 1;

    if (myguess === aiguess) {
      setvalue("Yeah!, your guess is correct");
    }
    else if (myguess > 10 || myguess < 0 || isNaN(myguess)) {

      setvalue("please check the instruction!");

    }
    else {
      setvalue("Oops! your guess is wrong");
    }

  };

  let filled = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setvalue("");
      setguess("");
    }, 2000);
  };


  return (
    <>
      <div className='guessgame'>

        <h2 className='guesslogo'>Guess!</h2>

        <div className='center'>

          <div className='guessinstruction'>
            <li className="li">enter the number between 1 to 10.</li>
            <li className="li">if you guess the correct number you win.</li>
            <li className="li">after guessing the number click on guess.</li>
          </div>

          <div className='guessenter'>
            <h4 className='guessenter'>Guess the number</h4>
          </div>



          <form action="" className='guessform' onSubmit={filled}>

            <input type="text" className='guessinput' id='myguess' value={guess} onChange={(event) => { setguess(event.target.value) }} />
            <button type='submit' className='btnsubmit' onClick={guessed}>Guess</button>

          </form>



          <div className='result'>
            <h4 className='results'>{value}</h4>
          </div>

        </div>
      </div>



    </>
  )
}

export default Guess;