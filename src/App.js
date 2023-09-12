import React from 'react';
// import css
import './App.css'
// import nav , slider ,grids ,footer
import Navbar from './components/navbar'
import Slider from './components/slider'
import Footer from './components/footer'
import Grids from './components/grids';





function App(props) {
  return (
    <div>
      <>
      <Navbar/>
      <Slider/>
      <Grids/>
      <Footer/>
      </>
      
    </div>
  );
}

export default App;