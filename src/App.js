import React, { Component } from 'react';
import { Button } from 'reactstrap';
// import logo from './logo.svg';
import logo from './311px-ISS.png';
import './App.css';
import MainNavBar from "./components/MainNavBar";
import RowContainer from "./components/RowContainer";
import CardMasks from "./components/Card/CardMasks";
import MasksItems from "./components/Items/MasksItems";
import MainCarousel from "./components/carousel/Caroousel";
import IssNavBar from "./components/NavBar/IssNvaBar";
import Footer from "./components/NavBar/Footer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavBar/>
        <MainCarousel />
        <IssNavBar />
        <RowContainer /> 
        <Footer />
        <MasksItems/>
        <CardMasks />
      

      </div>
    );
  }
}



export default App;
