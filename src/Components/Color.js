import React from "react";

class Color extends React.Component{
        constructor(){
            super();
            this.state = {color:"Red"};
        }
        render(){
            return(
                <>
                    <h1>My favourite color is {this.state.color}</h1>
                    <button onClick = {() => {this.setState({color:"Blue"})}}>Click here to change color</button>
                </>
            )
        }
}
export default Color;