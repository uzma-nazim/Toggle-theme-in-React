import React from 'react';
import ReactDOM from 'react-dom';

import LightDark from './theme';
import On from "./bulbToggle/on.jsx"
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <>
  
    <LightDark />
    <On/>

  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
