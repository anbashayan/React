import Car from './Car';
import React from 'react';

class Apple extends React.Component{
    render(){
        const {appleInfo} = this.props;
        const {type,color} = appleInfo;
        // this is a destructuring method. we have defined earlier in garage.js and we have learnt how to use props in class component

        return(
            <h2>I'm {color} {type} Apple!</h2>
        )
    }
}

export default Apple;