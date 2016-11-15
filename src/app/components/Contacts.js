import React from "react";
import ReactDOM from "react-dom";
import update from 'react-addons-update'
import ContactCreator from "./ContactCreator";
import ContactInfo from "./ContactInfo";

export class Contacts extends React.Component{
    constructor(){
        super();
        this.state = {
            contactData : [
                {name : "kwon", number:"010-0001-0001"},
                {name : "kim", number:"010-0002-0002"},
                {name : "park", number:"010-0003-0003"},
                {name : "shin", number:"010-0004-0004"}
            ],
            selectedKey: -1
        };
    }
    _onSelect(key){
        if(key == this.state.selectedKey){
            console.log("select cancle");
            this.setState({
                selectedKey:-1
            });
            return;
        }
        this.setState({
            selectedKey:key
        });
        console.log(key + "is select")
    }
    _isSelected(key){
       if(this.state.selectedKey == key){
           return true;
       }else{
           return false;
       }
   }


    _insertContact(name , number){
        let newState = update(this.state , {
            contactData:{
                $push :[{"name" : name, "number" : number}]
            }
        });
        this.setState(newState);

    }
    render(){
        return(
            <div>
                <h1>Contacts</h1>
                <ul>
                    {this.state.contactData.map((contact , i) => {
                        return (<ContactInfo
                                name={contact.name}
                                number={contact.number}
                                key={i}
                                selectKey={i}
                                onSelect={this._onSelect.bind(this)}
                                isSelected={this._isSelected.bind(this)(i)}
                            />);
                    })}
                </ul>
                <ContactCreator onInsert={this._insertContact.bind(this)}/>
            </div>
        );

    }
}


export default Contacts;
