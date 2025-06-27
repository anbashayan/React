import { useState } from "react";
// import styles from 'Head.module.css'

function Bike(){
    const[color,setColor] = useState("Red");
    const[year,setYear] = useState("2018");
    const[brand,setBrand] = useState("TVS");
    const[model,setModel] = useState("Wego");

    return(
        <h1 className={StyleSheet.bigBlue}>Scooter Details</h1>
    )
};
export default Bike;