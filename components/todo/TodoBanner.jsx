import React from 'react';

class TodoBanner extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <hr />
            </div>
            );
    }
}

export default TodoBanner;