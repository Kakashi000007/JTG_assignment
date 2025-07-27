import React from 'react';
import './App.css';
import HideAppBar from './header';
import image from './images/main_bg.jpg';
import Slider from './Slider';
import OutlinedCard from './lifestyle.js';
import Random from './myCustomer.js';
import ComplexPart from './mediaResources';
import Footer from './footer';
import PalindromeChecker from './PalindromeChecker';

const divStyle = {
  backgroundImage: `url(${image})`,
  margin : '5.35vh'

}

function App() {
  return (
    <div className="App">
      <HideAppBar/>
      
      <div style = {divStyle}>
      <Slider />
      <OutlinedCard />
      <Random />
      
      <ComplexPart />
      <Footer />
      </div>
      
      {/* Palindrome Checker Section */}
      <PalindromeChecker />
    </div>
  );
}

export default App;
