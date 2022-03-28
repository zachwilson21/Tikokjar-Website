import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Commands from "./pages/commands";
import Faq from "./pages/faq";
import { Button } from "@material-ui/core";



function App() {
  return (
    <>
      <Navbar />
    </>
  );
}
export default App;