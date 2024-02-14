import React from 'react';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  let playnow = "Play Now" ; 
  return (
     <>   <div className="welcome">
        <h1 id="home">gamez !</h1>
        <p>
          <span>Welcome to Gamez,</span> Hey there! I'm Anshuman, the creator behind this interactive corner of the web. At Gamez, we bring the joy of gaming right to your fingertips.

🔢 Dive into the excitement of our guessing number game, where the challenge is to predict the right number between 1 and 10. It's a test of wits and a dose of fun rolled into one!

🎲 Feeling lucky? Roll the virtual dice and see where chance takes you. Our dice roll game adds an element of unpredictability and thrill to your visit. <br/> <br/>
This website took a lot of effort and hard work to bring to life. After completing it, I find immense joy and satisfaction in sharing it with you. I hope you enjoy the games and the experience as much as I enjoyed creating them. Your support means the world to me!

        </p>
      </div>
      <Link className='btn' to='/games'>
        <Button btn={playnow}/>
      </Link>

     </>
  )
}

export default Home