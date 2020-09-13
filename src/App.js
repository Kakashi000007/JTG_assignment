import React from 'react';
import logo from './logo.svg';
import './App.css';
import HideAppBar from './header';
import image from './images/main_bg.jpg';
import Slider from './Slider';
import OutlinedCard from './lifestyle.js';
import Random from './myCustomer.js';
import ComplexPart from './mediaResources';
import Footer from './footer';
import Faltu from './images_cr';

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
    </div>
  );
}

export default App;
