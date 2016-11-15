 import React from "react";
import ReactDOM from "react-dom";


class ContactInfo extends React.Component{
    handleClick(){
        this.props.onSelect(this.props.selectKey);
    }
    render(){
        let getStyle = isSelect => {
            if(!isSelect) return;

            let style = {
                fontWeight: 'bold',
                backgroundColor: '#4efcd8'
            };

            return style;
        };
        return(
            <li
                onClick={this.handleClick.bind(this)}
                style={getStyle(this.props.isSelected)}>
                {this.props.name} {this.props.number}
            </li>
        );
    }
}

export default ContactInfo;
