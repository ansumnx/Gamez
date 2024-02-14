import React from "react";
import { HashRouter , Routes , Route} from 'react-router-dom';
import  Header from './Components/Header';
import Home from './Home/Home';
import Games from './Games/Games';
import Guess from './Guess/Guess';
import Dice from './Dice/Dice';

const App=()=>{
  return(
    <HashRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="games" element={<Games/>}/>
      <Route path="guess" element={<Guess/>}/>
      <Route path="dice" element={<Dice/>}/>
    </Routes>
    </HashRouter>



  )
}

export default App;


