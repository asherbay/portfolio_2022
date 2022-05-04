import logo from './logo.svg';
import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Projectscopy from './pages/Projectscopy'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import React, {useState, useEffect, useRef} from 'react'
import scale from './components/Scale'
import styled from 'styled-components'
import {styles} from './Styles'
import {isMobile} from 'react-device-detect'

import Background from './components/Background'

import useWindowSize from './hooks/useWindowSize'

function App() {
  const location = useLocation()
  const [pageHeight, setPageHeight] = useState(null)
  const windowSize = useWindowSize()
  const ref = useRef(null)
  const bgContainer = useRef(null)
  const [elementWidth, setElementWidth] = useState(ref.current ? ref.current.offsetWidth : null)
  

  useEffect(()=>{
    console.log("App component mounted")
    if(ref.current){
      setElementWidth(ref.current.offsetWidth)
    }
  }, [])

  useEffect(()=>{
    console.log("size changed")
    setPageHeight(Math.max(document.getElementById("root").firstChild.firstChild.scrollHeight, window.innerHeight))
  }, [document.body.scrollHeight, window.innerHeight, location.pathname])


  useEffect(()=>{
      if(ref.current){
        setElementWidth(ref.current.offsetWidth)
      }
      console.log("windowSize: " + window.innerHeight)
      console.log("docSize: " + document.body.scrollHeight)
  }, [windowSize])



  return (
    <div id="mainContainer" ref={bgContainer} style={{background: styles.bgColor, width: "100%", height: pageHeight, }}>
    
      <Content ref={ref} isMobile={isMobile}>
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/backgroundtest' element={<Background/>}/>
        </Routes>
        <Nav/>
      </Content>
      {/* <Background/> */}
    </div>
  );
}

export default App;

//screenCenterX - 



const Content = styled.div`
  transform-origin: top center;
  transform: scale(${isMobile ? 100 : styles.contentScale}%);  
  -webkit-transform: scale(${isMobile ? 100 : styles.contentScale}%); 
   

  display: flex;  
  flex-direction: ${!isMobile ? "row" : "column"};
  position: relative;
  top: 20px;
  gap: 10px;
  justify-content: center;
  align-items: ${isMobile ? "center" : "flex-start"};
  
  z-index: 1;
`