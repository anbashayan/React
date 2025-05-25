import Car from './Car';
import Apple from './Apple';

function Garage(){
    const brand = 'Nissan';
    return(
        <>
        <h1>Who lives inside my garage?</h1>
        <Car brand = {brand}/>
        <Apple/>
        </>
    )
}

export default Garage;