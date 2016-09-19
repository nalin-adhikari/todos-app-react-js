import React from 'react';
import TodoBanner from './todo/TodoBanner.jsx';
import TodoList from './todo/TodoList.jsx';
import AddTodo from './todo/AddTodo.jsx';
import _ from 'lodash';

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         todos: [
         {
            title: 'Welcome',
            completed: false,
            id: 123456
         }
         ]
      };
   }

   createTodo(item) {
      var todo = {title: item, completed: false, id: new Date().getTime()};
      this.setState({todos: this.state.todos.concat(todo)});
   }

   toggleStatus(id) {
      const foundTodo = _.find(this.state.todos, todo => todo.id === id);
      foundTodo.completed = !foundTodo.completed;

      this.setState({todos: this.state.todos});
   }

   saveTodo(oldId, newTitle) {
      const foundTodo = _.find(this.state.todos, todo => todo.id === oldId)

      foundTodo.title = newTitle;
      this.setState({ todos: this.state.todos });
   }

   deleteTodo(todoId) {
      _.remove(this.state.todos, todo => todo.id === todoId);
      this.setState({ todos: this.state.todos });
   }

   render() {
      return (
         <div className="container col-sm-6 col-sm-offset-3">
            <TodoBanner title="TODO" />
            <AddTodo todos={this.state.todos} createTodo={this.createTodo.bind(this)} />
            <TodoList 
               allTodos={this.state.todos} 
               toggleStatus={this.toggleStatus.bind(this)}
               saveTodo={this.saveTodo.bind(this)}
               deleteTodo={this.deleteTodo.bind(this)}
               />         
            </div>
         );
   }
}

export default App;