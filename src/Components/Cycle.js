import { useState } from "react";

function Cycle(){
    const [cycle,setCycle] = useState({
        color:"Black",
        brand:"Hero",
        model:"Gents version",
        year:"2017"
    });

    return(
        <>
            <h1>My Cycle</h1>
            <p>My Cycle's color is : {cycle.color}</p>
            <p>My Cycle's brand is : {cycle.brand}</p>
            <p>My Cycle's model is : {cycle.model}</p>
            <p>My Cycle's YoM is : {cycle.year}</p>
        </>
        
    );
}

export default Cycle;