import React from "react";
import ReactDOM from "react-dom";


class ContactCreator extends React.Component{
    constructor(){
        super();
        this.state ={
            name : '',
            number : ''
        };
    }
    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClick(){
        this.props.onInsert(this.state.name , this.state.number);
        this.setState({
            name : '',
            number : ''
        });
    }
    render(){
        return(
            <div>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value = {this.state.name}
                        onChange={this.handleChange.bind(this)}
                        />

                    <input
                        type="text"
                        name="number"
                        placeholder="number"
                        value = {this.state.number}
                        onChange={this.handleChange.bind(this)}
                        />
                    <button onClick={this.handleClick.bind(this)}>
                    Insert
                    </button>
                </p>
            </div>
        );
    }
}
export default ContactCreator;
