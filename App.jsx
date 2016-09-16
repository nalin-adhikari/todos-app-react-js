import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <Greeting />
            <TodoForm />
         </div>
      );
   }
}

class Greeting extends React.Component{
   render(){
      return (
            <div className = "row greeting">
               <div className = "col-md-4"></div>
               <div className = "col-md-4 textCenter">
                  <h3 className = "alert alert-success" >A React Todos App</h3>
               </div>
               <div className = "col-md-4"></div>
            </div>
         );
   }
}

class TodoForm extends React.Component{
   render(){
      return (
            <div className="row">
               <div className="col-md-2"></div>
               <div className="col-md-8">
                  <form className="form-horizontal">
                   <div className="form-group">
                     <div className="col-lg-10">
                       <input type="text" className="form-control" id="inputEmail" placeholder="Todo task ..." />
                     </div>
                   </div>
                     <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
               </div>
               <div className="col-md-2"></div>
            </div>
         );
   }
}

export default App;