import { useState } from "react";

function Cycle(){
    const [cycle,setCycle] = useState({
        color:"Black",
        brand:"Hero",
        model:"Gents version",
        year:"2017"
    });

    function updateColor(){
        setCycle(previousState =>{
            return{...previousState,color:"Red"}
        } )
    }

    console.log('Current State',cycle)

    return(
        <>
            <h1>My Cycle</h1>
            <p>My Cycle's color is : {cycle.color}</p>
            <p>My Cycle's brand is : {cycle.brand}</p>
            <p>My Cycle's model is : {cycle.model}</p>
            <p>My Cycle's YoM is : {cycle.year}</p>
            <button onClick ={updateColor}>Change Color</button>
        </>
        
    );
}

export default Cycle;