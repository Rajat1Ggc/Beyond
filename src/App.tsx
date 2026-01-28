import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screen/Home';
import FormScreen1 from './screen/FormScreen1';
import FormScreen2 from './screen/FormScreen2';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form1" element={<FormScreen1/>} />
        <Route path="/form2" element={<FormScreen2/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
