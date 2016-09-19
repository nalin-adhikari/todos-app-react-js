import React from 'react';
import _ from 'lodash';
import TodoListItem from './TodoListItem.jsx';

class TodoList extends React.Component {

    getAllTodos() {
        const props = _.omit(this.props, 'allTodos');

        return _.map(this.props.allTodos, (todo, index) => 
            <TodoListItem key={index} {...todo} {...props}/>
            );
    }

    render() {
        return (
            <div>
                {this.getAllTodos()}
            </div>
            );
    }

}
export default TodoList;