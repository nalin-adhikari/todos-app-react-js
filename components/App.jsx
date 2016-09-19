import React from 'react';
import TodoBanner from './todo/TodoBanner.jsx';
import TodoList from './todo/TodoList.jsx';
import AddTodo from './todo/AddTodo.jsx';

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         todos: []
      };
   }

   updateItem(item) {
      var todo = {title: item, completed: false, id: new Date().getTime()};
      this.setState({todos: this.state.todos.concat(todo)});
   }

   changeStatus() {
      // Here we need to change the status of the item when clicked on the Checkbox
   }

   render() {
      return (
         <div className="container col-sm-6 col-sm-offset-3">
            <TodoBanner title="TODO" />
            <AddTodo updateItem={this.updateItem.bind(this)} />
            <TodoList allTodos={this.state.todos} />
         </div>
         );
   }
}

export default App;