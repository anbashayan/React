import React from 'react';
import Vehicle from './Vehicle';

class Car extends React.Component{
  render(){
    const {vehicleInfo ={}} = this.props;
    const {brand,color} = vehicleInfo;
  

    return(
      <h2>I am {brand} {color} Car</h2>
    )
  }
}
export default Car;