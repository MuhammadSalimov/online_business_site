import React from "react";
import Home from "./Home/Home";
import Pricingg from "./Pages/Pricingg";
import Faqq from "./Pages/Faqq";
import Contactt from "./Pages/Contactt";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css";

function App() {
  return (
    <>
     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/pricing" element={<Pricingg />} />
        <Route path="/faq"  element={<Faqq /> } />
        <Route path="/contact"  element={<Contactt /> } />
      </Routes>
      </BrowserRouter>

    
    </>
  );
}

export default App;
