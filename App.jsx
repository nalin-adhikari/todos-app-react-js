import React from 'react';

class App extends React.Component {

  // getInitialState(){
  //   var todos = [];
  //   var completed = [];
  //   if(localStorage.todos && localStorage.completed){
  //     todos = JSON.parse(localStorage.todos);
  //     completed = JSON.parse(localStorage.completed);
  //   }else{
  //     //Insert dummy todos
  //     todos.push("todos one");
  //     completed.push("true");
  //   }

  //   return{
  //     todos: todos,
  //     completed: completed
  //   };
  // }

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
    var todo = document.getElementById('todoItem').value;
    //console.log(todo);
    todos.push(todo);
    console.log(todos);    
  }

   render(){
      return (
          <div className="form-group">
            <div className="col-lg-10">
              <input type="text" className="form-control" id="todoItem" placeholder="Todo task ..." />
            </div>
            <button type="button" className="btn btn-primary" onClick={this.addTodos} >Insert</button>
          </div>
         );
   }
}

class TodoList extends React.Component{
 
  render(){
      return (
            <div className="form-group">
               <div className="col-lg-10" id="list">
                {todos.map(function(item, index){
                    return <TodoListItem key={index} item={item} index={index} />;
                })}
               </div>
             </div>
         );
   }
}

class TodoListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="checkbox">
        <button type="button" className="close" data-dismiss="alert">&times;</button>
        <label>
          <input type="checkbox" /> { todos[parseInt(this.props.index)] }
        </label>
      </div>
    );
  }
}

// var todos = localStorage.getItem('todos') || [];
var todos = ["hi", "hello"];


export default App;