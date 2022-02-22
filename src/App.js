import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import React, {useState, useEffect} from 'react'
import p5 from 'p5'

function App() {
  const [zoom, setZoom] = useState(1)
  p5.windowResized = () => {
    console.log('zoom set')
    setZoom(p5.map(p5.windowWidth, 600, 1600, 0.3, 0.7))
  }

  return (
    <div style={{background: "#656565", display: 'flex', justifyContent: 'center', alignItems: 'flex-start', zoom: zoom}}>
      <Nav />
      <Routes  >
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
