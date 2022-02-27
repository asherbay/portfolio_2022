import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import StyleProvider from './providers/StyleProvider'
ReactDOM.render(
  <BrowserRouter style={{verticalAlign: "top", display: "inline"}}>
    <StyleProvider>
      <App style={{display: "inline", position: "relative", verticalAlign: "top"}}/>
    </StyleProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
