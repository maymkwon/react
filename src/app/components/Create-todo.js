import React, { PropTypes } from 'react'



export default class CreateTodo extends React.Component {
    constructor(){
        super();
        this.state = {
            error : null
        };
    }
    renderError(){
        if(!this.state.error){
            return null;
        }

        return <div style={{color:'red'}}> {this.state.error}</div>
    }
    render () {
        return(
                <form onSubmit={this.handleCreate.bind(this)}>
                    <input type="text" placeholder="what to do!" ref="createInput" />
                    <button >Create</button>
                    {this.renderError()}
                </form>
        );
    }
    handleCreate(e){
        e.preventDefault();

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);


        if(validateInput){
            this.setState({
                error:validateInput
            });
            return;
        }
        this.setState({
            error:null
        });
        this.props.createTask(this.refs.createInput.value);
        this.refs.createInput.value='';
    }

    validateInput(task){
        if(!task){
            return 'please enter';
        }else if(_.find(this.props.todos, todo => todo.task === task)){
            return 'alread exists';
        }else{
            return null;
        }
    }
}
