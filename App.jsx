import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <Greeting />
            <div className="row">
               <div className="col-md-2"></div>
               <div className="col-md-8">
                  <TodoForm />
                  <TodoList />
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
   render(){
      return (
          <div className="form-group">
            <div className="col-lg-10">
              <input type="text" className="form-control" id="inputEmail" placeholder="Todo task ..." />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
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
                     <input type="checkbox" /> My first Todo task.
                   </label>
                 </div>
               </div>
             </div>
         );
   }
}

export default App;