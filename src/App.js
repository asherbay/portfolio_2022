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

import useWindowSize from './hooks/useWindowSize'

function App() {
  const location = useLocation()
  const [pageHeight, setPageHeight] = useState(null)
  const windowSize = useWindowSize()
  const ref = useRef(null)
  const [elementWidth, setElementWidth] = useState(ref.current ? ref.current.offsetWidth : null)
  

  useEffect(()=>{
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
    <div id="mainContainer" style={{background: styles.bgColor,  margin: "auto", width: "100%", height: pageHeight}}>
      <Content ref={ref} >
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Nav/>
      </Content>
    </div>
  );
}

export default App;

//screenCenterX - 



const Content = styled.div`
  transform-origin: top center;
  transform: scale(${isMobile ? 5 : 64}%);  
  background: ${styles.bgColor}; 
  vertical-align: super;
  display: flex;  
  position: relative;
  top: 20px;
  gap: 10px;
  justify-content: center;
  align-items: flex-start;
  
`