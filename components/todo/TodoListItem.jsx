import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    onEditClick() {
        this.setState({
            isEditing: true
        });
    }

    onCancelClick() {
        this.setState({
            isEditing: false
        });
    }

    onSaveClick(e) {
        e.preventDefault();

        const oldId = this.props.id;
        const newTitle = this.refs.editTodo.value;

        this.props.saveTodo(oldId, newTitle);

        this.setState({ isEditing: false });
    }

    renderTaskSection() {
        const {id, title, completed} = this.props;

        const todoStyle = {
            textDecoration: completed ? 'line-through': '',
            cursor: 'pointer'
        }

        if(this.state.isEditing) {
            return (
                <div className="col-sm-8">
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={title} ref="editTodo" />
                    </form>
                </div>
                );
        }

        return (
            <div className="col-sm-8">
                <h4 className="no-margin" 
                    style={todoStyle}
                    onClick={this.props.toggleStatus.bind(this, id)}>
                        {this.props.title}
                </h4>
            </div>
            );
    }

    renderActionSection() {
        if(this.state.isEditing) {
            return (
                <div>
                    <div className="col-sm-1"><button className="btn btn-success btn-sm" onClick={this.onSaveClick.bind(this)}>Save</button></div>
                    <div className="col-sm-2"><button className="btn btn-danger btn-sm" onClick={this.onCancelClick.bind(this)}>Cancel</button></div>
                </div>
                );
        }
        return (
                <div>
                    <div className="col-sm-1"><button className="btn btn-warning btn-sm" onClick={this.onEditClick.bind(this)}>Edit</button></div>
                    <div className="col-sm-2"><button className="btn btn-danger btn-sm" onClick={this.props.deleteTodo.bind(this, this.props.id)}>Delete</button></div>
                </div>
            );
    }

    render() {
        return (
            <div className="col-sm-12 list-group-item">
                {this.renderTaskSection()}
                {this.renderActionSection()}
            </div>
            );
    }
}

export default TodoListItem;