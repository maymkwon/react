import React from "react";
import {render} from "react-dom";

class AboutMap extends React.Component {
    render() {
        let getStyle = select => {
            if(!select) return;

            let style = {
                fontWeight: 'bold',
                backgroundColor: '#4efcd8'
            };

            return style;
        };
        return (
            <li
                onClick={this.handleClick.bind(this)}
                style={getStyle(this.props.selected)}
            >
                {this.props.name}{this.props.number}
            </li>
        );
    };
    handleClick(){
        this.props.select(this.props.selectedkey);
    }
}


export default AboutMap;
