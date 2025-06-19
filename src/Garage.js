import Car from './Car';
// import Apple from './Apple';

function Garage(){
     const isDoorOpened = false;
    // const brand = 'Ferrari';
    // const color = 'Black';

    // const carInfo = { brand:"Ferrari", color:"Black"}
    const carInfo ={};
    const appleInfo = {type:"Fuji", color:"Red"}

    const carList =[
        {brand:"Toyota",color:"black"},
        {brand:"Nissan",color:"blue"},
        {brand:"Honda",color:"white"}
    ]



    const studentInfo = {name:"Sujanasrishayan A.",indexNo:"22020977"}

    // props used in class as componets
    return(
        <>
        <h1>Who lives inside my garage?</h1>
        {carInfo.brand !== undefined && carInfo.color !== undefined ?
        // {<Car brand = {brand} color = {color}/> }
        <Car carInfo = {carInfo}/>:null }
        <Apple appleInfo ={appleInfo} />
        {isDoorOpened ? <h2>Garage door is opened</h2> : <h2>Garage door is closed</h2>}

        <ul>
            {carList.map((carInfo) =>  <li><Car carInfo={carInfo}/></li> )}        </ul>
        </>
    )   
}

export default Garage;