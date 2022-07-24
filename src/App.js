import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';

import './styles/GeneralStyles.css';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
	<Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>

    <Footer />
    </div>
  );
}
export default App;







