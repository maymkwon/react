import React from "react";
import ReactDOM from "react-dom";

export class Home_self extends React.Component{
upUP(){
    let value = Math.round(Math.random()*100);
    this.props.updateVal(value);
}
constructor(){
    super();
    this.upUP = this.upUP.bind(this);
}
    render(){
        return(
            <div>
                <h1>hello random number is {this.props.number}</h1>
                <button onClick={this.upUP}>randomize</button>
            </div>
        );

    }
}

export default Home_self;
