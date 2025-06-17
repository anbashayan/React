import React from 'react';
import Car from './Car'; // Car is child here

function Vehicle(){
    const vehicleInfo = {brand :"Toyota",color:"black"};

    const {brand,color} = vehicleInfo;

    const text = `My ${brand} ${color} is out there`;
    return(
        <div>
            <h1>Who's vehicle is out there?</h1>
            
            <h2>{text}</h2>

            <Car vehicleInfo={vehicleInfo} />
        </div>
    )
}

export default Vehicle;