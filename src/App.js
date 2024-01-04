import React from 'react';
import Home from "./ui/views/home_view/Home"
import './ui/utils/styles/global.css';
import './App.css';
import Navbar from './ui/blocks/Navbar'
import Footer from './ui/blocks/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
