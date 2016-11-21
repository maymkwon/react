import React, { PropTypes } from 'react'



export default class TodoListItems extends React.Component {
    constructor(){
        super();

        this.state={
            isEditing:false
        };
    }
    renderTaskSection(){
        const { task , isCompleted} = this.props;

        const taskStyle = {
            color :isCompleted ? 'green' : 'red',
            cursor :'pointer'
        };
        if(this.state.isEditing){
            return(
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={task} ref= "editInput" />
                    </form>
                </td>
            );
        }
        return(
            <td
                style={taskStyle}
                onClick={this.props.toggleTask.bind(this , task)}
                >
                {task}</td>
        );
    }
    renderActionSection(){
        if(this.state.isEditing){
            return(
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancleClick.bind(this)}>Cancle</button>
                </td>
            );
        }
        return(
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
            </td>
        );
    }
    render () {
        // console.log(this.props.items)

        return(
                <tr>
                    {this.renderTaskSection()}

                    {this.renderActionSection()}
                </tr>
        );
    }

    onEditClick(){
        this.setState({
            isEditing:true
        });
    }
    onCancleClick(){
        this.setState({
            isEditing:false
        });
    }
    onSaveClick(e){
        e.preventDefault();
        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;

        this.props.saveTask(oldTask,newTask);
        this.setState({
            isEditing:false
        });
    }
}
