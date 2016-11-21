import _ from 'lodash';
import React, { PropTypes } from 'react';

import TodoListHeader from './Todo-list-header';
import TodoListItems from './Todo-list-items';



export default class TodoList extends React.Component {
    renderItems(){
        const props = _.omit(this.props , 'todos');
        return _.map(this.props.todos , (todo, i) => <TodoListItems key={i} {...todo} {...props}/>);
    }
    render () {
        // console.log(this.props.todos)
        return(
                <table>
                    <TodoListHeader/>
                    <tbody>
                        {this.renderItems()}
                    </tbody>
                </table>
        );
    }
}
