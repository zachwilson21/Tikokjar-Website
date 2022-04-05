import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Home from './components/Home/Home';
import SeeIt from "./components/See it/SeeIt";
import Commands from './components/Commands/Commands';




function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SeeIt />
      <Commands />
    </>
  );
}
export default App;