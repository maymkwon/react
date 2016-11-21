import React from "react";

class AboutCreator extends React.Component {
    constructor(){
        super();
        this.state = {
            name:'',
            number:''
        }
    }
    render() {
        console.log(this.state.name);

        return (
            <div>
                <input
                    type="text"
                    placeholder="text here!"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this)}

                    />
                <input
                    type="text"
                    placeholder="text here!"
                    name="number"
                    value={this.state.number}
                    onChange={this.handleChange.bind(this)}
                    />
                <button onClick={this.handleClick.bind(this)}>ADD!!</button>
            </div>
        );
    };

    handleChange(e){
        var nextsTate = {};
        nextsTate[e.target.name] = e.target.value;
        this.setState(nextsTate);
        // console.log(nextsTate);
    };

    handleClick(){
        this.props.onInsert(this.state.name , this.state.number);
        this.setState({
            name:'',
            number:''
        })
    }


}


export default AboutCreator;
