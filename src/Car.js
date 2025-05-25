function Car(props){
    // const { brand,color } = props;
    const {carInfo} = props;
    const { brand,color } = carInfo;

    const text = `I m a ${brand} ${color} Car`;

    return(
        <h2>{text}</h2>
    )
}

export default Car;