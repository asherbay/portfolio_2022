import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import React from 'react'

function App() {
  return (
    <div style={{backgroundColor: "gray", display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
      <Nav />
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Nav />
    </div>
  );
}

export default App;
