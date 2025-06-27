import React from "react";

class Van extends React.Component{
    constructor(){
        super();
        this.state = {color:"Brown", model:"KDH"}
    }

    render(){
        return <>
            <h1>My Color is {this.state.color}</h1>
            <button onClick = {() => { this.setState((previousState)=> {})}}>Change this colour</button>
                </>
    }
}