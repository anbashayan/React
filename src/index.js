import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Garage from './Garage';
// import Car from './Components/Car';
// import Banana from './Components/Banana';
import reportWebVitals from './reportWebVitals';
  // import NameShow from './Components/Name';
  // import Vehicle from './Components/Vehicle';
// import Header from './Components/Header';
import FavouriteColor from './Components/FavouriteColor';
import Color from './Components/Color';
import Scooter from './Components/Scooter'
import Bike from './Components/Bike'
import Cycle from './Components/Cycle'
import List from './Components/List';


function Lobby(){
  return(
    <div>
          {/* <h2>Who's in my lobby?</h2> */}
          {/* <Banana/> */}
          {/* <NameShow/> */}
          {/* here above two componenets are child elements of div */}
          {/* <Vehicle/> */}
          {/* <Header/> */}
          {/* <Car vehicleInfo={{ brand: "Honda", color: "Grey" }} /> */}
          <FavouriteColor/>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>ewhvhj
    <Lobby/>
    <Color/>
    <Scooter/>
    <Cycle/>
    <List/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
