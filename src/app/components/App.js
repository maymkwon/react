// import React from "react";
import _ from 'lodash';
import React, { PropTypes } from 'react';
import TodoList from "./Todo-list";
import CreateTodo from "./Create-todo";
import update from 'react-addons-update';


const todos = [
    {task : 'make react tut', isCompleted:false},
    {task : 'eat dinner', isCompleted:true}
];
export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            todos,
            value:'O'
        }
    }

    render () {
        return(
            <div>
                <h1>Todo list</h1>
                <CreateTodo todos={this.state.todos}createTask={this.createTask.bind(this)}/>
                <TodoList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                    />
                <button className="square" onClick={() => this.setState({value: 'X'})}>
                    {this.state.value}
                </button>
            </div>
        );
    }
    toggleTask(task){
        const foundTask = _.find(this.state.todos, todo => todo.task === task);
        foundTask.isCompleted = !foundTask.isCompleted;
        this.setState({
            todos: this.state.todos
        });
    }
    createTask(task){
        this.state.todos.push({
            task,
            isCompleted:false
        });
        this.setState({
            todos:this.state.todos
        });
    }
    saveTask(oldTask,newTask){
        const foundTodo = _.find(this.state.todos , todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({
            todos:this.state.todos
        });
    }
    deleteTask(taskToDelete){
        _.remove(this.state.todos , todo => todo.task === taskToDelete);
        console.log("??");
        this.setState({
            todos:this.state.todos
        });
        console.log("??");
    }
}





// import {BrowserRouter as Router, Link, Match, Miss } from 'react-router';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// import Home_self from "./components/Home_self";
// import Contacts from "./components/Contacts";
// import Home from "./Home_test";
// import About from "./About";
// import Articles  from "./Article";
// import Notfound  from "./Notfound";
// import Animation  from "./Animation";


// const  App= () => {
//     return(
//             <div>
//                 <Animation />
//                 <Router>
//                     <div>
//                         <ul>
//                             <li><Link to="/">Home</Link></li>
//                             <li><Link to="/About">About</Link></li>
//                             <li><Link to="/Articles">Articles</Link></li>
//                         </ul>
//                         <hr/>
//                         <Match exactly pattern='/' component={Home}/>
//                         <Match pattern='/About' component={About}/>
//                         <Match pattern='/Articles' component={Articles}/>
//                         <Miss component={Notfound}/>
//                     </div>
//                 </Router>
//             </div>
//     );
// };
