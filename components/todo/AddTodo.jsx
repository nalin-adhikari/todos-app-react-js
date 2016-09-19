import React from 'react';

class AddTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        };
    }

    handleChange(e) {
        const title = e.target.value;
        this.setState({item: title});
    }

    goForUpdate(e) {
        e.preventDefault();
        this.props.updateItem(this.state.item);
        this.setState({item: ''});
    }

    render() {
        return (
            <div className="form-group well">
            <input type="text" 
            className="form-control" 
            placeholder="Enter Todo ..." 
            onChange={this.handleChange.bind(this)}
            value={this.state.item} />
            <br/>
            <button className="btn btn-primary" onClick={this.goForUpdate.bind(this)}>Add</button>
            </div>
            );
        
    }
}

export default AddTodo;