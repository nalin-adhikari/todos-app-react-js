import React from 'react';
import _ from 'lodash';

class AddTodo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    goForUpdate(e) {
        e.preventDefault();

        const createTodo = this.refs.todoInput;
        const todo = createTodo.value;
        const validateInput = this.validateInput(todo);

        if(validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createTodo(todo);
        this.refs.todoInput.value = '';
    }

    validateInput(todo) {
        if (!todo) {
            return 'Please Enter a Todo.';
        } /*else if (_.find(this.props.todos, todo => todo.title === todo)) {
            return 'Simialar Task already exists';
        }*/ else {
            return null;
        }
    }

    renderError() {
        if(!this.state.error) {
            return null;
        }
        return <div style={{ color: 'red' }}>{this.state.error}</div>;
    }

    render() {
        return (
            <form onSubmit={this.goForUpdate.bind(this)} className="form-group well">
                <input type="text" 
                    className="form-control" 
                    placeholder="Enter Todo ..." 
                    ref="todoInput"/>
                <br/>
                <button className="btn btn-primary">Add</button>
                {this.renderError()}
            </form>
            );
    }
}

export default AddTodo;