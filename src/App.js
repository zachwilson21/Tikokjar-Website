import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Home from './components/Home/Home';
import SeeIt from "./components/See it/SeeIt";
import Commands from './components/Commands/Commands';
import background from './images/background.svg'




function App() {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover' }}>
      <Navbar/>
      <Home />
      <SeeIt />
      <Commands />
    </div>
  );
}
export default App;