import React from "react";
import {render} from "react-dom";
import update from 'react-addons-update'

import AboutMap from "./components/About-map";
import AboutCreator from "./components/About-creator";

class About extends React.Component {
    constructor(){
        super();
        this.state = {
            test:[
                {name:'kwon',number:'010-000100-1010-101-101'},
                {name:'kwon',number:'010-000100-1010-101-102'},
                {name:'kwon',number:'010-000100-1010-101-103'},
                {name:'kwon',number:'010-000100-1010-101-104'}
            ],
            selectedkey:-1
        }
    }
    insert(name, number){
        let newState = update( this.state, {
            test:{
                $push : [{"name":name, "number":number}]
            }
        });
        this.setState(newState);

    }
    _select(key){
        if(key == this.state.selectedkey){
            console.log("키값이랑 셀렉 키값이랑 똑같으니까 셋스테이트로 -1줘봄");
            this.setState({
                selectedkey:-1
            });
            return;
        }

        this.setState({
            selectedkey:key
        });
        console.log("선택된 키의 값은" + this.state.selectedkey);
    }
    _selected(key){
        if(this.state.selectedkey == key){
            console.log(this.state.selectedkey , key);
            return true;
        }else{
            console.log(this.state.selectedkey , key);
            return false;
        }
    }
    render() {
        return (
            <div>
                <AboutCreator
                    onInsert={this.insert.bind(this)}
                />
                <ul>
                    {this.state.test.map((li , i) => {
                        return(
                            <AboutMap
                                name={li.name}
                                number={li.number}
                                key={i}
                                selectedkey={i}
                                select={this._select.bind(this)}
                                selected={this._selected.bind(this)(i)}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}
export default About;
