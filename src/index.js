import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Garage from './Garage';
import Car from './Components/Car';
import Banana from './Components/Banana';
import reportWebVitals from './reportWebVitals';


function Lobby(){
  return(
    <div>
          <h2>Who's in my lobby?</h2>
          <Car/>
          <Banana/>
          {/* here above two componenets are child elements of div */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Lobby/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
