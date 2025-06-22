import { useState } from "react";
function FavouriteColor(){
    // let color = "Blue";

    const [color,setColor] = useState('Blue');

    return(
        <div>
            {/* these tags should be under parent element */}
            <h1>My Favourite Color is {color}</h1>
            <button onClick = {() => {setColor('Red')}}>Change Color</button>
        </div>
    )
}

export default FavouriteColor;