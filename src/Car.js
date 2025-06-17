function Car(props){
    const {carInfo} = props;
    const {brand,color}= carInfo;

    const text = `I'm ${brand} ${color} Car`;

    return(
        <h2>{text}</h2>
    )
}

export default Car;