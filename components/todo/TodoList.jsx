import React from 'react';

class TodoList extends React.Component {
    
    render() {
        return (
            <ul className="list-group">
                {this.props.allTodos.map((todo) => 
                    <li key={todo.id} className="col-sm-12 list-group-item">
                        <div className="col-sm-1"><input type="checkbox" /></div>
                        <div className="col-sm-10"><h4 className="no-margin">{todo.title}</h4></div>
                        <div className="col-sm-1"><button className="btn btn-danger btn-sm">X</button></div>
                    </li>
                )}
            </ul>
            );
    }

}
export default TodoList;