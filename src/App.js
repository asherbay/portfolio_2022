import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import React, {useState, useEffect, useRef} from 'react'
import scale from './components/Scale'
import styled from 'styled-components'

import useWindowSize from './hooks/useWindowSize'

function App() {
  const [zoom, setZoom] = useState(1)
  const windowSize = useWindowSize()
  const ref = useRef(null)
  const [elementWidth, setElementWidth] = useState(ref.current ? ref.current.offsetWidth : null)
  

  useEffect(()=>{
    if(ref.current){
      setElementWidth(ref.current.offsetWidth)
    }

  }, [])

  useEffect(()=>{
    
      console.log(elementWidth)
  }, [elementWidth])

  useEffect(()=>{
      if(ref.current){
        setElementWidth(ref.current.offsetWidth)
      }
      console.log("windowSize: " + windowSize.width)
  }, [windowSize])



  return (
    <div id="mainContainer" style={{background: "#656565",}}>
      <Content ref={ref} >
        <Routes>
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

const Content = styled.div`
  transform: scale(80%);  
  background: #656565; 
  display: flex;  
  justify-content: center;
  align-items: start;
  vertical-align: top;
  position: relative;
  top: -80px;
`