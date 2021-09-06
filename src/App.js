import logo from './logo.svg';
import './App.css';
import profileImage from './img/hp.png'
import profileImage2 from './img/harry.gif'
import { Container,Row,Col } from 'reactstrap'
import React, {useState, useEffect} from 'react';
import {BrowserView, MobileView} from 'react-device-detect';

function useWindowSize(){
  const [size,setSize] = useState([window.innerHeight,window.innerWidth]);
  useEffect(()=>{
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize",handleResize);
    return () => {
      window.removeEventListener("resize",handleResize)
    };
  }, []);
  return size;
}

function App() {


  
  console.log("hai risolto il misfatto")
  return (
    <div className="App">

         
      <h1>CACCIA AL TESORO 2021</h1>
      <h2>Azione cattolica ACG Santa Maria la Carità </h2>
      <>
  <BrowserView>
  <img src={profileImage} alt=""/>
  
  </BrowserView>
  <MobileView>
      <h3>tip= Open it on your PC</h3>
  </MobileView>
</>
      
      <img src={profileImage2} alt="profile-image"/>

    </div>
    
  );
}

export default App;
