import React from "react";
import ReactDOM from "react-dom";

export class Random extends React.Component{
    updateNumber(){
        let value = Math.round(Math.random()*100);
        this.props.onUpdate(value);
    }
    constructor(){
        super();
        this.updateNumber = this.updateNumber.bind(this);
    }
    render(){
        return(
            <div>
                <h1>RANDOM NUMBER : {this.props.number}</h1>
                <button onClick={this.updateNumber}>Randomize</button>
            </div>
        );
    }

}
export default Random;
