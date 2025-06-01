import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Garage from './Garage';
import Car from './Car';
import reportWebVitals from './reportWebVitals';

function Cars(){
  return(
    <h2>Hi I'm UCSC Student</h2>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cars/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
