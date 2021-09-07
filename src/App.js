import logo from './logo.svg';
import './App.css';
import profileImage from './img/hp.png'
import profileImage2 from './img/harry.gif'
import profileImage3 from './img/bacchetta.png'

import React, {useState, useEffect} from 'react';
import {BrowserView, MobileView} from 'react-device-detect';
import { icons } from 'react-icons';
import { FaTrashAlt, FaInfoCircle, FaEye, FaEyeSlash, IoMdLaptop, IoIosColorWand, FaDesktop,FaMagic} from 'react-icons/fa';
import { Row, Col} from "react-bootstrap";
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
  const [isImg, setImg] = useState(false)
  const appari = () => {
    setImg(true)
  };

  const appari2 = () => {
    setImg(false)
  };

  console.log(" prova ad usare-> DECODE BASE 64")
  console.log("aHR0cHM6Ly93d3cuYmFyZ2lvcm5hbGUuaXQvd3AtY29udGVudC91cGxvYWRzL3NpdGVzLzQvMjAxNi8wMy95b2dhLmpwZw==")
 
  return (
    <div className="App">

        
      <h1>CACCIA AL TESORO 2021</h1>
      <h2>Azione cattolica ACG Santa Maria la Carità </h2>
      <>
  <BrowserView>
  <img src={profileImage} alt=""/>  
  
    
  </BrowserView>
  <MobileView>
   
      
  { isImg && <FaDesktop className="button" onClick={ appari2}> 
  <i className="fa fa-heart-o" />
          </FaDesktop>}
  { !isImg &&
 <FaMagic className="button" onClick={ appari}> Clicca
 
           <icons className="pe-7s-shopbag" />
          </FaMagic>
          
}
  </MobileView>
</>
      
      <img src={profileImage2} alt="profile-image"/>

    </div>
    
    
  );
}

export default App;
