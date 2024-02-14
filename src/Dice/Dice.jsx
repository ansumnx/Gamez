import React from 'react';
import { useState } from 'react';
import './Dice.css';

const Dice = () => {
   let [ dice , setdice] = useState("");

let rolled=()=>{
  let roll=Math.floor(Math.random()*6)+1;
  if(roll==6){
    setdice("lucky! you")
  }
  else
  {
    setdice("rollagain");
  }
};
let roled =(event)=>{
  event.preventDefault();
  setTimeout(()=>{
    setdice("");
  },2000);
};

let rotate={
  transform: "rotate(360deg)"
}



  return (
    <div className='dicegames'>
      <h2 className='dicelogo'>Roll the Dice!</h2>
      <div className="dicecenter">

      <div className='instruction'>
        <li className='li'>you have three change to get six</li>
        <li className='li'>Roll the dice or Roll your luck</li>
        <li className='li'>If you get six you win</li>
      </div>
      <div className='diceimg'>
        <img className='dices' style={rotate} src="./diceroll2.jpg" alt="dice" />
      </div>
      <form action="" className='diceform' onSubmit={roled}>
      <button type='submit' className='btnsubmit' onClick={rolled}>Roll</button>
      </form>
      <div className='result'>
            <h4 className='results'>{dice}</h4>
          </div>

      </div>
    </div>

      


    
  )
}

export default Dice