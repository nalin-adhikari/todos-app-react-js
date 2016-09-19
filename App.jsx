import React from 'react';

class App extends React.Component {

  getInitialState(){
    var todos = [];
    var completed = [];
    if(localStorage.todos && localStorage.completed){
      todos = JSON.parse(localStorage.todos);
      completed = JSON.parse(localStorage.completed);
    }else{
      //Insert dummy todos
      todos.push("todos one");
      completed.push("true");
    }

    return{
      todos: todos,
      completed: completed
    };
  }

   render() {
      return (
         <div>
            <Greeting />
            <div className="row">
               <div className="col-md-2"></div>
               <div className="col-md-8">
                  <TodoForm />
                  <TodoList todos={this.todos} states={this.completed} />
               </div>
               <div className="col-md-2"></div>
            </div>
         </div>
      );
   }
}

class Greeting extends React.Component{
   render(){
      return (
            <div className = "greeting textCenter">
               <h3 className = "alert alert-success" >A React Todos App</h3>
            </div>
         );
   }
}

class TodoForm extends React.Component{

   addTodos(){
    var todo = document.getElementById("todoItem");
   }

   render(){
      return (
          <div className="form-group">
            <div className="col-lg-10">
              <input type="text" className="form-control" id="todoItem" placeholder="Todo task ..." />
            </div>
            <button type="button" className="btn btn-primary" onClick={this.addTodos()} >Create</button>
          </div>
         );
   }
}

class TodoList extends React.Component{
   render(){
      return (
            <div className="form-group">
               <div className="col-lg-10">
                 <div className="checkbox">
                 <button type="button" className="close" data-dismiss="alert">&times;</button>
                   <label>
                     <input type="checkbox" /> {this.todos}
                   </label>
                 </div>
               </div>
             </div>
         );
   }
}

var todos = localStorage.getItem('todos') || [];

export default App;