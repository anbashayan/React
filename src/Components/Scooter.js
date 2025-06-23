import { useState } from "react";

function Scooter(){
    const [Color,setColor] = useState("Red")
    const [Brand,setBrand] = useState("Honda")
    const [Model,setModel] = useState("Dio")
    const [Year,setYear]   = useState("2019")
    return(
        <>
            <h1>My Scooter</h1>
            {/* <p>Color :{Color}</p> */}
            <p>Brand:{Brand}</p>
            <p>Model:{Model}</p>
            <p>Year:{Year}</p>
        </>
        
    )
}

export default Scooter;